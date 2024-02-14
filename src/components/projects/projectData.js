import doodleLogo from "../../images/Doodle.png";
import mushroomLogo from "../../images/mushroom.jpg";
import wineLogo from "../../images/wine.jpg";
import cuteLogo from "../../images/logo512.png";



export const projectDetails = [
    {
        name: 'Daily Doodle',
        logo: doodleLogo,
        desc: 'Daily Doodle is a for fun web app that allows users to draw a daily prompt on a virtual canvas and quickly export their masterpiece. \n\nCreated with TypeScript and NextJS for practice and proficiency.',
        tags: 'TypeScript · React · CSS · NextJS ',
        websiteURL: 'https://www.dailydoodle.lol',
        repoURL: 'https://github.com/crewgamble/Daily-Doodle'
    },
    {
        name: 'Mushroom Classification Neural Net',
        logo: mushroomLogo,
        desc: 'This project contains the implementation of a simple neural network model designed to classify mushrooms into either edible or poisonous categories based on their characteristics. \n\nThe model is built using PyTorch, a popular deep learning library.',
        tags: 'Python · PyTorch · Matplotlib · Jupyter Notebook',
        websiteURL: '',
        repoURL: 'https://github.com/crewgamble/Mushroom-Neural-net'
    },
    {
        name: 'Wine Quality Neural Net',
        logo: wineLogo,
        desc: 'This repository uses a neural network to predict the quality of wine based on various physicochemical features. \n\nThe model is built using PyTorch and trained on the "Wine Quality" dataset available from the UCI Machine Learning Repository. \n\nThe goal for this project was to demonstrate how to preprocess data, implement a regression model in PyTorch, and evaluate its performance.',
        tags: 'Python · PyTorch · Matplotlib · Jupyter Notebook',
        websiteURL: '',
        repoURL: 'https://github.com/crewgamble/Wine-Quality-Neural-Net'
    },
    {
        name: 'Cute Crypto',
        logo: cuteLogo,
        desc: 'Cute Crypto is a responsive react website that demonstrates a crypto/NFT project.\n\nCreated an ethereum wallet connection method via EthersJS. \n\n This project was made to improve front-end design and understand responsive design.',
        tags: 'JavaScript · Solidity · React · NextJS · EthersJS',
        websiteURL: 'https://www.cutecrypto.online/',
        repoURL: 'https://github.com/crewgamble/Cute-Crypto'
    },
]