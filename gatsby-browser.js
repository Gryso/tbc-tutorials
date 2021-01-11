// global styles
import "./src/styles/reset.scss"
import "./src/styles/colors.scss"
import "./src/styles/typography.scss"

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript("http://cdn.cavernoftime.com/api/tooltip.js")
  }
}
