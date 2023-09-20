import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Credentials, SignUpCredentials } from './Credentials';
import { PasswordService } from './password.service';
import { TokenService } from './token.service';
import { UserInfo } from './UserInfo';
import { UserService } from '../user/user.service';
import { User } from 'src/user/base/User';

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException('The passed credentials are incorrect');
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }

  async signup(credentials: SignUpCredentials): Promise<UserInfo> {
    const {
      username,
      password,
      firstName,
      lastName,
      aboutMe,
      email,
      githubLink,
      image,
      linkedinLink,
      message,
      speciality,
      twitterLink,
    } = credentials;

    const user = await this.userService.create({
      data: {
        username,
        password,
        firstName,
        lastName,
        aboutMe,
        email,
        githubLink,
        image,
        linkedinLink,
        message,
        speciality,
        twitterLink,
        roles: ['user'],
      },
    });

    if (!user) {
      throw new UnauthorizedException('could not create user');
    }

    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      username: user.username,
      id: user.id,
      roles: (user.roles as { roles: string[] }).roles,
    };
  }

  async me(authorization: string = ''): Promise<User> {
    const bearer = authorization.replace(/^Bearer\s/, '');
    const username = this.tokenService.decodeToken(bearer);
    const result = await this.userService.findOne({
      where: { username },
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
        email: true,
      },
    });

    if (!result) {
      {
        throw new NotFoundException(`No resource was found for ${username}`);
      }
    }
    return result;
  }

  async checkUser() {
    const userStatus = await this.userService.findMany({
      select: {
        username: true,
        firstName: true,
        lastName: true,
        id: true,
        roles: true,
        portfolios: {
          select: {
            category: true,
            createdAt: true,
            githubUrl: true,
            id: true,
            image: true,
            info: true,
            liveUrl: true,
            updatedAt: true,
            userId: true,
            title: true,
            language: true,
          },
        },
        aboutMe: true,
        githubLink: true,
        technicalSkills: true,
        twitterLink: true,
        email: true,
        createdAt: true,
        home: true,
        image: true,
        linkedinLink: true,
        message: true,
        speciality: true,
      },
    });

    if (!userStatus) {
      throw new NotFoundException('There is no user');
    }

    return userStatus;
  }
}
