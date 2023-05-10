import {createSlice} from "@reduxjs/toolkit";
import photoFirstProject from '../assets/img/firstProject.png'
import photoSecondProject from '../assets/img/secondProject.png'
const initialState = {
    projects: [
        {name: 'SocialNet', url: 'https://training.epam.ua/Training/Details/3599?lang=ua', photo: photoFirstProject, description: 'SocialNet is the ultimate social networking platform, connecting people from all over the world in a seamless and user-friendly way. With advanced features like customizable profiles, intuitive messaging, and easy-to-use privacy settings, SocialNet makes it easy to build meaningful relationships online. Join today and start connecting with friends, family, and like-minded individuals.'},
        {name: 'HelpMed', url: 'https://www.youtube.com/', photo: photoSecondProject, description: 'HeartCare Clinic is a leading medical facility specializing in the treatment of heart diseases. Our team of experienced and compassionate cardiologists is dedicated to providing the highest quality care to our patients, using state-of-the-art technology and the latest medical advancements. From diagnosis to treatment, we offer a comprehensive range of services to ensure our patients receive the personalized care they need. At HeartCare Clinic, we are committed to helping our patients achieve optimal heart health and live life to the fullest.'},
    ]
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjects: (state, action) => {
            return state;
        }
    }
})

export const {action, reducer} = projectsSlice;

//
// export const selectProjects = state => {
//     console.log(state.projects.projects)
//     return state.projects.projects
// }