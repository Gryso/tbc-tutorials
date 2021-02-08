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
  // document.onreadystatechange = () => {
  //   if (document.readyState === 'complete')
  //   {
  //     addScript("http://tbcdb.com/tooltips/power.js?vnew")
  //     window.aowow_tooltips = {
  //       "colorlinks": true,
  //       "iconizelinks": true,
  //       // "renamelinks": true
  //     }
  //   }
  // };

  window.onload = () => {
    addScript("http://tbcdb.com/tooltips/power.js?vnew")
    window.aowow_tooltips = {
      "colorlinks": true,
      "iconizelinks": true,
      // "renamelinks": true
    }
    // addScript("http://cdn.cavernoftime.com/api/tooltip.js")
  }
}
