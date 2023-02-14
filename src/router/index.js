import {createRouter, createWebHistory} from 'vue-router'
import QuizezView from '../views/QuizezView.vue'
import QuizView from '../views/QuizView.vue'


const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: QuizezView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView
        }
       
    ]
})

export default router