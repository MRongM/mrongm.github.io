import { createApp, h } from 'vue'
import App from './App.jsx'

function main() {
    const app = createApp({
        render() {
            return h(App)
        }
    })
    const divRef = document.createElement('div')
    document.body.appendChild(divRef)
    app.mount(divRef)
}

main()