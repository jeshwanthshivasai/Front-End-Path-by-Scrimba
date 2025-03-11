function setTheme(theme) {
    let root = document.documentElement;
    if(theme === 'light') {
        root.style.setProperty('--bg-color', '#ECF2FF');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#ECF2FF');
    } else if (theme === 'dark') {
        root.style.setProperty('--bh-colro, #2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');
    }
}

setTheme('dark');