/** 
 * javascript comment 
 * @Author: Maliah_Rajan_M 
 * @Date: 2019-07-22 19:20:24 
 * @Desc: Theme Configuration | Dark & Light
 */

const darKTheme = {
    primaryColor: 'green',
    accentColor: '#458622',
    backgroundColor: '#504f4d',
    textColor: '#FFC777',
    secondaryColor: '#252525',
    theme_key: 'DARK_THEME',
};

const lightTheme = {
    primaryColor: 'red',
    accentColor: '#458622',
    backgroundColor: '#FFC777',
    textColor: '#504f4d',
    secondaryColor: '#7F5315',
    theme_key: 'LIGHT_THEME',
};

const rtlStyles = {
    alignItems: 'flex-start',
    textAlign: 'right',
    flexDirection: 'row-reverse',
    key: 'RTL',
    RTL: true
}

const ltrStyles = {
    alignItems: 'flex-end',
    textAlign: 'left',
    flexDirection: 'row',
    key: 'LTR',
    RTL: false
}

export const layoutStyles = [rtlStyles, ltrStyles];

// eslint-disable-next-line import/no-anonymous-default-export
export default [darKTheme, lightTheme];