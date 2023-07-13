import { ref, defineAsyncComponent } from 'vue'
// public data
// export var web =ref('len99')    
export var lang =ref('zhtw')    
export var MenuShow = ref(false)
export var showPopupData = ref(false) //顯示
export var popupPosition = ref('bottom') //定位
export var windowComponent = ref('')//檔案名稱

export var showSecPopupData = ref(false)
export var SecpopupPosition = ref('bottom')
export var SecwindowComponent = ref('')
export var componentName = ref('lobby')

// public function
export const setPopupData = (dirFile, position='bottom') => {
    showPopupData.value = true
    popupPosition.value = position
    var npath = ''
    var components = ''
    components = import.meta.glob(`@/views/**/*.vue`)
    npath = "/src/views/" + dirFile
    windowComponent.value = defineAsyncComponent(components[npath+'.vue'])
};
export var ClosePopup = () => {
    showPopupData.value = false
}
export const setSecPopupData = ( dirFile, position='bottom') => {
    showSecPopupData.value = true
    SecpopupPosition.value = position
    var npath = ''
    var components = ''
    components = import.meta.glob(`@/views/**/*.vue`)
    npath = "/src/views/" + dirFile
    
    SecwindowComponent.value = defineAsyncComponent(components[npath+'.vue'])
};
export var CloseSecPopup = () => {
    showSecPopupData.value = false
}
export const setG1Component = ( dirFile, vueFile ) => {
    var npath = ''
    var components = ''
    npath = "/src/views/" + dirFile
    components = import.meta.glob(`@/views/**/*.vue`)
    componentName.value = defineAsyncComponent(components[npath+'.vue'])
    MenuShow.value = false 
};