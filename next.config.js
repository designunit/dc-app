const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')

module.exports = () => {
    const themeVariables = {
        '@primary-color': 'rgb(50, 50, 50)',                    // primary color for all components
        // '@link-color': '#1890ff',                               // link color
        // '@success-color': '#52c41a',                            // success state color
        // '@warning-color': '#faad14',                            // warning state color
        // '@error-color': '#f5222d',                              // error state color
        // '@font-size-base': '14px',                              // major text font size
        // '@heading-color': 'rgba(0, 0, 0, .85)',                 // heading text color
        // '@text-color': 'rgba(0, 0, 0, .65)',                    // major text color
        // '@text-color-secondary ': 'rgba(0, 0, 0, .45)',         // secondary text color
        // '@disabled-color ': 'rgba(0, 0, 0, .25)',               // disable state color
        '@border-radius-base': '0px',                           // major border radius
        // '@border-color-base': '#d9d9d9',                        // major border color
        // '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',     // major shadow for layers
    }

    return withTypescript(
        withCss(
            withLess({
                lessLoaderOptions: {
                    javascriptEnabled: true,
                    modifyVars: themeVariables,
                }
            })
        )
    )
}