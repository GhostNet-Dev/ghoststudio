window.addEventListener("DOMContentLoaded", () => {
    const replaceText = (selector: string, text: string | undefined) => {
        const element = document.getElementById(selector);
        if(element && text != undefined) {
            element.innerHTML = text;
        }
    };

    for (const type of ["chrome", "node", "electron"]) {
        replaceText(`${type}-version`, 
            process.versions[type as keyof NodeJS.ProcessVersions]);
    }
})