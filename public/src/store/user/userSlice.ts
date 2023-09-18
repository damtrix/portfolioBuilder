import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface portfolioPrams {
  category: string;
  createdAt: string;
  githubUrl: string;
  id: string;
  image: string;
  info: string;
  liveUrl: string;
  updatedAt: string;
  userId: string;
}

interface homeParams {
  createdAt: string;
  id: string;
  logo: string;
  topBgImage: string;
  updatedAt: string;
  userId: string;
}

export interface User {
  aboutMe: string;
  createdAt: string;
  firstName: string;
  id: string;
  lastName: string;
  roles: [string];
  username: string;
  email: string;
  githubLink: string;
  home: homeParams[];
  image: string;
  linkedinLink: string;
  message: string;
  portfolios: portfolioPrams[];
  speciality: string;
  technicalSkills: [];
  twitterLink: string;
}

const user: User = {
  username: 'default',
  firstName: 'Oludamola',
  lastName: 'Onarinde',
  id: 'clmj0do5w00001fmsq4l0fl9x',
  roles: ['user'],
  portfolios: [
    {
      category: 'HTML',
      createdAt: '2023-09-14T10:50:27.137Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmj1upj600081fmsomz1gszg',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T10:50:27.137Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T13:39:49.221Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmj7win900001f915aw8e4pl',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T13:39:49.221Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T14:20:27.760Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmj9cs8g00001ftgvk1wmu91',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T14:20:27.760Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T14:57:13.255Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmjao20700001fqajadl75xj',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T14:57:13.255Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T17:30:52.833Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmjg5nvm00011fqaa89r5pxq',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T17:30:52.833Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'Damtooo',
      createdAt: '2023-09-14T17:31:25.054Z',
      githubUrl: 'jjdjdjd',
      id: 'clmjg6cqm00021fqacbrtya11',
      image: 'jjjjdjjdjd',
      info: 'jndjjdjj',
      liveUrl: 'kknknndkd',
      updatedAt: '2023-09-14T17:31:25.054Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T17:32:24.968Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmjg7myw00031fqasuea1uug',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T17:32:24.968Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      category: 'HTML',
      createdAt: '2023-09-14T17:55:46.182Z',
      githubUrl: 'https://github.com/prisma/prisma/issues/10633',
      id: 'clmjh1o5i00001focxb504l4d',
      image:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F79%2F219179-050-0280823E%2FLesser-Bush-Baby-South-Africa-Galago-Bushbaby.jpg&tbnid=5YvXqQiL39fkfM&vet=12ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6..i&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fanimal%2FGalagoides&docid=QBkrTLiq27oJRM&w=1163&h=1600&q=bush%20baby&ved=2ahUKEwil7tOo56mBAxUUvicCHfKZBm4QMygDegQIARB6',
      info: "Migrating NestJS applications typically involves updating your codebase to work with newer versions of NestJS or migrating from one version of NestJS to another. NestJS provides a straightforward way to do this, and it's important to follow best practices to ensure a smooth migration process. Below, I'll outline the general steps for migrating a",
      liveUrl: 'https://www.npmjs.com/package/nest-access-control',
      updatedAt: '2023-09-14T17:55:46.182Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
  ],
  aboutMe: 'exampleAboutMe',
  githubLink: 'https://github.com/damtrix/portfolioBuilder',
  technicalSkills: [],
  twitterLink: 'exampleTwitterLink',
  email: 'dammy2@gmail.com',
  createdAt: '2023-09-14T10:09:12.522Z',
  home: [
    {
      createdAt: '2023-09-14T10:11:37.100Z',
      id: 'clmj0grnw00021fms0b842lys',
      logo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fguardian.ng%2Fwp-content%2Fuploads%2F2022%2F10%2FBad-boy-timz-1424x802.jpg&tbnid=EfcpiUt8ozbRNM&vet=12ahUKEwjs84y_5qmBAxWNvicCHXKiDDUQMygBegQIARA1..i&imgrefurl=https%3A%2F%2Fguardian.ng%2Flife%2Fbad-boy-timz-conversing-life-of-the-party%2F&docid=OIPIobL2dJ03SM&w=1424&h=802&q=bad%20boy%20timz&ved=2ahUKEwjs84y_5qmBAxWNvicCHXKiDDUQMygBegQIARA1',
      topBgImage:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fguardian.ng%2Fwp-content%2Fuploads%2F2022%2F10%2FBad-boy-timz-1424x802.jpg&tbnid=EfcpiUt8ozbRNM&vet=12ahUKEwjs84y_5qmBAxWNvicCHXKiDDUQMygBegQIARA1..i&imgrefurl=https%3A%2F%2Fguardian.ng%2Flife%2Fbad-boy-timz-conversing-life-of-the-party%2F&docid=OIPIobL2dJ03SM&w=1424&h=802&q=bad%20boy%20timz&ved=2ahUKEwjs84y_5qmBAxWNvicCHXKiDDUQMygBegQIARA1',
      updatedAt: '2023-09-14T10:11:37.100Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
    {
      createdAt: '2023-09-14T10:11:59.306Z',
      id: 'clmj0h8sp00041fmscc2q84of',
      logo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGRgaGBgYGRwaGhkaHRocGBoaGRgYGBkcIS4lHB4rIRgYJjgnKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHzQrJSE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMQBAQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADwQAAIBAgQDBgUCBAUEAwAAAAECEQAhAwQSMQVBUQYiYXGBkRMyobHwwdFCUnLhFBUjYvEWkqLCBySC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAQQDAAEDBQAAAAAAAAABAhEDBBIhMRNBURQiMqEVQmFxgf/aAAwDAQACEQMRAD8AiVakFILT9NYWdNDkNW3DmHOqcUZk8S9XFmcommwyKKR6AyxtRKGtDEMLWqLTTUqYERQALiiq/E3qzYUHmEoADYGpFWuQa6VpgPVqhxVk0+9NLUAMRSKTg074lPDTSAWGlddK6KehpgQqpqRVmpIFRs1ADjhimFKTE11DQAxVg0SjA0wVLhIKQE2gU5VrjLTFYg0ASNND4imp3eomUkUAQOKExDRTLQzregYNiNFAZhqOzAquxhUMuKIppUyKVIsfprsU5dqSiszYbpqfBEVzTSC00yJIvMk9qNxc0iLqdgomJPU8h1NVOTasn/8AJuZb/RQHuw7eZlRf0+5rRypGG23R6Rl8dHGpGDDqDNSgV4ZwHj+JgN3HIHT9vyPCvUeB9qkxe48K/SbHynwO3hzpqX0HGi/aocSpVx0OxFRkVRAFimogx50U5E1E0GgDmqkIpMkVwGOVFjOuBTkQULiY2xttP2P56UO+fj086nch7WWjmKFZzNcTNhvPnepFYfn0+xp7kKmOQE01xFOV/wA9YpMJN',
      topBgImage:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhYYGRgaGBgYGRwaGhkaHRocGBoaGRgYGBkcIS4lHB4rIRgYJjgnKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHzQrJSE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMQBAQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EADwQAAIBAgQDBgUCBAUEAwAAAAECEQAhAwQSMQVBUQYiYXGBkRMyobHwwdFCUnLhFBUjYvEWkqLCBySC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAQQDAAEDBQAAAAAAAAABAhEDBBIhMRNBURQiMqEVQmFxgf/aAAwDAQACEQMRAD8AiVakFILT9NYWdNDkNW3DmHOqcUZk8S9XFmcommwyKKR6AyxtRKGtDEMLWqLTTUqYERQALiiq/E3qzYUHmEoADYGpFWuQa6VpgPVqhxVk0+9NLUAMRSKTg074lPDTSAWGlddK6KehpgQqpqRVmpIFRs1ADjhimFKTE11DQAxVg0SjA0wVLhIKQE2gU5VrjLTFYg0ASNND4imp3eomUkUAQOKExDRTLQzregYNiNFAZhqOzAquxhUMuKIppUyKVIsfprsU5dqSiszYbpqfBEVzTSC00yJIvMk9qNxc0iLqdgomJPU8h1NVOTasn/8AJuZb/RQHuw7eZlRf0+5rRypGG23R6Rl8dHGpGDDqDNSgV4ZwHj+JgN3HIHT9vyPCvUeB9qkxe48K/SbHynwO3hzpqX0HGi/aocSpVx0OxFRkVRAFimogx50U5E1E0GgDmqkIpMkVwGOVFjOuBTkQULiY2xttP2P56UO+fj086nch7WWjmKFZzNcTNhvPnepFYfn0+xp7kKmOQE01xFOV/wA9YpMJN',
      updatedAt: '2023-09-14T10:11:59.306Z',
      userId: 'clmj0do5w00001fmsq4l0fl9x',
    },
  ],
  image: 'exampleImage',
  linkedinLink: 'https://www.linkedin.com/in/damtrix/',
  message: 'exampleMessage',
  speciality: 'frontend Developer',
};

const initialState: Array<User> = [];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
