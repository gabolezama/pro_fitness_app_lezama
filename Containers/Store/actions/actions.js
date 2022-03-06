export const ScreenSetter = (tag) =>{
    return {
    type: tag,
    active: true
}}
export const ScreenResetter = (tag) =>{
    return {
    type: tag,
    active: false
}}