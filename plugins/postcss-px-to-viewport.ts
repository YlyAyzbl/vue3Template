//postcss 插件
import { Plugin } from 'postcss';
const Options = {
    viewportWidth: 375, //UI设计稿的宽度 给多少写多少 默认375
}
interface Options {
    viewportWidth?: number
}
export const PostCsspxToViewport = (options: Options = Options): Plugin => {
    const opt = Object.assign({}, Options, options)
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        // 钩子函数
        Declaration(node) {
            // px转vw
            // 设计稿375px
            // 有些px不需要转换 我需要转换就写成xl
            if (node.value.includes('px')) { // 可改成自定义的如xl
                const num = parseFloat(node.value); // 考虑到小数
                node.value = `${((num / opt.viewportWidth) * 100).toFixed(2)}vw`
            }
        }
    }
}