export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //123456789
            date:new Date().toDateString(), //sat 23, july
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //123456789
            date:new Date().toDateString(), //sat 23, july
            text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //123456789
            date:new Date().toDateString(), //sat 23, july
            text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  ',
            picture: null,
        }
    ]
})