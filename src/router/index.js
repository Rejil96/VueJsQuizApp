import {createRouter, createWebHistory} from 'vue-router'
import QuizezView from '../views/QuizezView.vue'
import QuizView from '../views/QuizView.vue'
import PathNotFound from '../views/PathNotFoundView.vue'


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
        },
        { 
            path: '/:pathMatch(.*)*', 
            component: PathNotFound 
        },
       
    ]
})

export default router