const React = require("react")

// Adds the tag to the head
const HeadComponents = [
  <meta
    key="google-verification"
    name="google-site-verification"
    content="SHh6jF02w6Xi4JxwRr0afJzTZy9KvKsp74hu97-zl8o"
  />,
]

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents(HeadComponents)
}
