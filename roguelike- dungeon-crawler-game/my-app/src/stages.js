const stage1 = [
    { x: 1, y: 1, pathWay: true, occupied: "none" },
    { x: 1, y: 2, pathWay: true, occupied: "none" },
    { x: 1, y: 3, pathWay: true, occupied: "none" },
    { x: 1, y: 4, pathWay: true, occupied: "none" },
    { x: 1, y: 5, pathWay: true, occupied: "none" },
    { x: 1, y: 6, pathWay: true, occupied: "none" },
    { x: 1, y: 7, pathWay: true, occupied: "none" },
    { x: 1, y: 8, pathWay: true, occupied: "none" },
    { x: 1, y: 9, pathWay: true, occupied: "none" },
    { x: 1, y: 10, pathWay: true, occupied: "none" },
    { x: 1, y: 11, pathWay: true, occupied: "none" },
    { x: 1, y: 12, pathWay: true, occupied: "none" },
    { x: 1, y: 13, pathWay: true, occupied: "none" },

    { x: 2, y: 1, pathWay: true, occupied: "none" },
    { x: 2, y: 2, pathWay: true, occupied: "none" },
    { x: 2, y: 3, pathWay: true, occupied: "none" },
    { x: 2, y: 4, pathWay: true, occupied: "none" },
    { x: 2, y: 6, pathWay: true, occupied: "none" },
    { x: 2, y: 7, pathWay: true, occupied: "none" },
    { x: 2, y: 8, pathWay: true, occupied: "none" },
    { x: 2, y: 9, pathWay: true, occupied: "none" },
    { x: 2, y: 11, pathWay: true, occupied: "none" },
    { x: 2, y: 12, pathWay: true, occupied: "none" },
    { x: 2, y: 13, pathWay: true, occupied: "none" },

    { x: 3, y: 1, pathWay: true, occupied: "none" },
    { x: 3, y: 2, pathWay: true, occupied: "none" },
    { x: 3, y: 3, pathWay: true, occupied: "none" },
    { x: 3, y: 4, pathWay: true, occupied: "none" },
    { x: 3, y: 9, pathWay: true, occupied: "none" },
    { x: 3, y: 10, pathWay: true, occupied: "none" },
    { x: 3, y: 11, pathWay: true, occupied: "none" },
    { x: 3, y: 12, pathWay: true, occupied: "none" },
    { x: 3, y: 13, pathWay: true, occupied: "none" },

    { x: 4, y: 1, pathWay: true, occupied: "none" },
    { x: 4, y: 2, pathWay: true, occupied: "none" },
    { x: 4, y: 3, pathWay: true, occupied: "none" },
    { x: 4, y: 4, pathWay: true, occupied: "none" },
    { x: 4, y: 5, pathWay: true, occupied: "none" },
    { x: 4, y: 6, pathWay: true, occupied: "none" },
    { x: 4, y: 7, pathWay: true, occupied: "none" },
    { x: 4, y: 8, pathWay: true, occupied: "none" },
    { x: 4, y: 9, pathWay: true, occupied: "none" },
    { x: 4, y: 10, pathWay: true, occupied: "none" },
    { x: 4, y: 11, pathWay: true, occupied: "none" },
    { x: 4, y: 12, pathWay: true, occupied: "none" },
    { x: 4, y: 13, pathWay: true, occupied: "none" },


    { x: 5, y: 1, pathWay: true, occupied: "none" },
    { x: 5, y: 2, pathWay: true, occupied: "none" },
    { x: 5, y: 3, pathWay: true, occupied: "none" },
    { x: 5, y: 4, pathWay: true, occupied: "none" },
    { x: 5, y: 8, pathWay: true, occupied: "none" },
    { x: 5, y: 9, pathWay: true, occupied: "none" },
    { x: 5, y: 10, pathWay: true, occupied: "none" },



    { x: 6, y: 1, pathWay: true, occupied: "none" },
    { x: 6, y: 2, pathWay: true, occupied: "none" },
    { x: 6, y: 3, pathWay: true, occupied: "none" },
    { x: 6, y: 4, pathWay: true, occupied: "none" },
    { x: 6, y: 5, pathWay: true, occupied: "none" },
    { x: 6, y: 7, pathWay: true, occupied: "none" },
    { x: 6, y: 8, pathWay: true, occupied: "none" },
    { x: 6, y: 10, pathWay: true, occupied: "none" },
    { x: 6, y: 11, pathWay: true, occupied: "none" },
    { x: 6, y: 12, pathWay: true, occupied: "none" },
    { x: 6, y: 13, pathWay: true, occupied: "none" },

    { x: 7, y: 1, pathWay: true, occupied: "none" },
    { x: 7, y: 2, pathWay: true, occupied: "none" },
    { x: 7, y: 3, pathWay: true, occupied: "none" },
    { x: 7, y: 4, pathWay: true, occupied: "none" },
    { x: 7, y: 5, pathWay: true, occupied: "none" },
    { x: 7, y: 6, pathWay: true, occupied: "none" },
    { x: 7, y: 8, pathWay: true, occupied: "none" },
    { x: 7, y: 9, pathWay: true, occupied: "none" },
    { x: 7, y: 11, pathWay: true, occupied: "none" },
    { x: 7, y: 12, pathWay: true, occupied: "none" },
    { x: 7, y: 13, pathWay: true, occupied: "none" },

    { x: 8, y: 1, pathWay: true, occupied: "none" },
    { x: 8, y: 2, pathWay: true, occupied: "none" },
    { x: 8, y: 3, pathWay: true, occupied: "none" },
    { x: 8, y: 4, pathWay: true, occupied: "none" },
    { x: 8, y: 5, pathWay: true, occupied: "none" },
    { x: 8, y: 6, pathWay: true, occupied: "none" },
    { x: 8, y: 7, pathWay: true, occupied: "none" },
    { x: 8, y: 9, pathWay: true, occupied: "none" },
    { x: 8, y: 10, pathWay: true, occupied: "none" },
    { x: 8, y: 12, pathWay: true, occupied: "none" },
    { x: 8, y: 13, pathWay: true, occupied: "none" },

    { x: 9, y: 1, pathWay: true, occupied: "none" },
    { x: 9, y: 2, pathWay: true, occupied: "none" },
    { x: 9, y: 4, pathWay: true, occupied: "none" },
    { x: 9, y: 5, pathWay: true, occupied: "none" },
    { x: 9, y: 6, pathWay: true, occupied: "none" },
    { x: 9, y: 7, pathWay: true, occupied: "none" },
    { x: 9, y: 8, pathWay: true, occupied: "none" },
    { x: 9, y: 10, pathWay: true, occupied: "none" },
    { x: 9, y: 11, pathWay: true, occupied: "none" },
    { x: 9, y: 12, pathWay: true, occupied: "none" },
    { x: 9, y: 13, pathWay: true, occupied: "none" },

    { x: 10, y: 1, pathWay: true, occupied: "none" },
    { x: 10, y: 2, pathWay: true, occupied: "none" },
    { x: 10, y: 4, pathWay: true, occupied: "none" },
    { x: 10, y: 5, pathWay: true, occupied: "none" },
    { x: 10, y: 6, pathWay: true, occupied: "none" },
    { x: 10, y: 7, pathWay: true, occupied: "none" },
    { x: 10, y: 9, pathWay: true, occupied: "none" },
    { x: 10, y: 10, pathWay: true, occupied: "none" },
    { x: 10, y: 11, pathWay: true, occupied: "none" },
    { x: 10, y: 13, pathWay: true, occupied: "none" },

    { x: 11, y: 4, pathWay: true, occupied: "none" },
    { x: 11, y: 5, pathWay: true, occupied: "none" },
    { x: 11, y: 6, pathWay: true, occupied: "none" },
    { x: 11, y: 8, pathWay: true, occupied: "none" },
    { x: 11, y: 9, pathWay: true, occupied: "none" },
    { x: 11, y: 10, pathWay: true, occupied: "none" },
    { x: 11, y: 11, pathWay: true, occupied: "none" },
    { x: 11, y: 13, pathWay: true, occupied: "none" },

    { x: 12, y: 1, pathWay: true, occupied: "none" },
    { x: 12, y: 2, pathWay: true, occupied: "none" },
    { x: 12, y: 3, pathWay: true, occupied: "none" },
    { x: 12, y: 4, pathWay: true, occupied: "none" },
    { x: 12, y: 5, pathWay: true, occupied: "none" },
    { x: 12, y: 7, pathWay: true, occupied: "none" },
    { x: 12, y: 8, pathWay: true, occupied: "none" },
    { x: 12, y: 9, pathWay: true, occupied: "none" },
    { x: 12, y: 10, pathWay: true, occupied: "none" },
    { x: 12, y: 11, pathWay: true, occupied: "none" },
    { x: 12, y: 13, pathWay: true, occupied: "none" },

    { x: 13, y: 1, pathWay: true, occupied: "none" },
    { x: 13, y: 2, pathWay: true, occupied: "none" },
    { x: 13, y: 3, pathWay: true, occupied: "none" },
    { x: 13, y: 4, pathWay: true, occupied: "none" },
    { x: 13, y: 6, pathWay: true, occupied: "none" },
    { x: 13, y: 7, pathWay: true, occupied: "none" },
    { x: 13, y: 8, pathWay: true, occupied: "none" },
    { x: 13, y: 9, pathWay: true, occupied: "none" },
    { x: 13, y: 10, pathWay: true, occupied: "none" },
    { x: 13, y: 11, pathWay: true, occupied: "none" },
    { x: 13, y: 12, pathWay: true, occupied: "none" },
    { x: 13, y: 13, pathWay: true, occupied: "none" },

];
const stage2 = [
    { x: 1, y: 1, pathWay: true, occupied: "none" },
    { x: 1, y: 2, pathWay: true, occupied: "none" },
    { x: 1, y: 3, pathWay: true, occupied: "none" },
    { x: 1, y: 4, pathWay: true, occupied: "none" },
    { x: 1, y: 6, pathWay: true, occupied: "none" },
    { x: 1, y: 7, pathWay: true, occupied: "none" },
    { x: 1, y: 8, pathWay: true, occupied: "none" },
    { x: 1, y: 9, pathWay: true, occupied: "none" },
    { x: 1, y: 11, pathWay: true, occupied: "none" },
    { x: 1, y: 12, pathWay: true, occupied: "none" },
    { x: 1, y: 13, pathWay: true, occupied: "none" },

    { x: 2, y: 1, pathWay: true, occupied: "none" },
    { x: 2, y: 2, pathWay: true, occupied: "none" },
    { x: 2, y: 3, pathWay: true, occupied: "none" },
    { x: 2, y: 4, pathWay: true, occupied: "none" },
    { x: 2, y: 6, pathWay: true, occupied: "none" },
    { x: 2, y: 7, pathWay: true, occupied: "none" },
    { x: 2, y: 9, pathWay: true, occupied: "none" },
    { x: 2, y: 10, pathWay: true, occupied: "none" },
    { x: 2, y: 11, pathWay: true, occupied: "none" },
    { x: 2, y: 12, pathWay: true, occupied: "none" },
    { x: 2, y: 13, pathWay: true, occupied: "none" },

    { x: 3, y: 1, pathWay: true, occupied: "none" },
    { x: 3, y: 2, pathWay: true, occupied: "none" },
    { x: 3, y: 4, pathWay: true, occupied: "none" },
    { x: 3, y: 5, pathWay: true, occupied: "none" },
    { x: 3, y: 6, pathWay: true, occupied: "none" },
    { x: 3, y: 8, pathWay: true, occupied: "none" },
    { x: 3, y: 9, pathWay: true, occupied: "none" },
    { x: 3, y: 10, pathWay: true, occupied: "none" },
    { x: 3, y: 11, pathWay: true, occupied: "none" },
    { x: 3, y: 12, pathWay: true, occupied: "none" },
    { x: 3, y: 13, pathWay: true, occupied: "none" },

    { x: 4, y: 1, pathWay: true, occupied: "none" },
    { x: 4, y: 3, pathWay: true, occupied: "none" },
    { x: 4, y: 4, pathWay: true, occupied: "none" },
    { x: 4, y: 5, pathWay: true, occupied: "none" },
    { x: 4, y: 7, pathWay: true, occupied: "none" },
    { x: 4, y: 8, pathWay: true, occupied: "none" },
    { x: 4, y: 9, pathWay: true, occupied: "none" },
    { x: 4, y: 10, pathWay: true, occupied: "none" },
    { x: 4, y: 11, pathWay: true, occupied: "none" },
    { x: 4, y: 12, pathWay: true, occupied: "none" },
    { x: 4, y: 13, pathWay: true, occupied: "none" },

    { x: 5, y: 2, pathWay: true, occupied: "none" },
    { x: 5, y: 3, pathWay: true, occupied: "none" },
    { x: 5, y: 4, pathWay: true, occupied: "none" },
    { x: 5, y: 12, pathWay: true, occupied: "none" },
    { x: 5, y: 13, pathWay: true, occupied: "none" },

    { x: 6, y: 1, pathWay: true, occupied: "none" },
    { x: 6, y: 2, pathWay: true, occupied: "none" },
    { x: 6, y: 3, pathWay: true, occupied: "none" },
    { x: 6, y: 4, pathWay: true, occupied: "none" },
    { x: 6, y: 6, pathWay: true, occupied: "none" },
    { x: 6, y: 7, pathWay: true, occupied: "none" },
    { x: 6, y: 8, pathWay: true, occupied: "none" },
    { x: 6, y: 9, pathWay: true, occupied: "none" },
    { x: 6, y: 10, pathWay: true, occupied: "none" },
    { x: 6, y: 11, pathWay: true, occupied: "none" },
    { x: 6, y: 12, pathWay: true, occupied: "none" },
    { x: 6, y: 13, pathWay: true, occupied: "none" },

    { x: 7, y: 6, pathWay: true, occupied: "none" },
    { x: 7, y: 7, pathWay: true, occupied: "none" },
    { x: 7, y: 8, pathWay: true, occupied: "none" },
    { x: 7, y: 9, pathWay: true, occupied: "none" },
    { x: 7, y: 10, pathWay: true, occupied: "none" },
    { x: 7, y: 11, pathWay: true, occupied: "none" },
    { x: 7, y: 12, pathWay: true, occupied: "none" },
    { x: 7, y: 13, pathWay: true, occupied: "none" },

    { x: 8, y: 1, pathWay: true, occupied: "none" },
    { x: 8, y: 2, pathWay: true, occupied: "none" },
    { x: 8, y: 3, pathWay: true, occupied: "none" },
    { x: 8, y: 4, pathWay: true, occupied: "none" },
    { x: 8, y: 5, pathWay: true, occupied: "none" },
    { x: 8, y: 6, pathWay: true, occupied: "none" },
    { x: 8, y: 7, pathWay: true, occupied: "none" },
    { x: 8, y: 8, pathWay: true, occupied: "none" },
    { x: 8, y: 13, pathWay: true, occupied: "none" },

    { x: 9, y: 1, pathWay: true, occupied: "none" },
    { x: 9, y: 2, pathWay: true, occupied: "none" },
    { x: 9, y: 4, pathWay: true, occupied: "none" },
    { x: 9, y: 5, pathWay: true, occupied: "none" },
    { x: 9, y: 6, pathWay: true, occupied: "none" },
    { x: 9, y: 7, pathWay: true, occupied: "none" },
    { x: 9, y: 8, pathWay: true, occupied: "none" },
    { x: 9, y: 9, pathWay: true, occupied: "none" },
    { x: 9, y: 10, pathWay: true, occupied: "none" },
    { x: 9, y: 11, pathWay: true, occupied: "none" },
    { x: 9, y: 13, pathWay: true, occupied: "none" },


    { x: 10, y: 1, pathWay: true, occupied: "none" },
    { x: 10, y: 2, pathWay: true, occupied: "none" },
    { x: 10, y: 4, pathWay: true, occupied: "none" },
    { x: 10, y: 5, pathWay: true, occupied: "none" },
    { x: 10, y: 6, pathWay: true, occupied: "none" },
    { x: 10, y: 7, pathWay: true, occupied: "none" },
    { x: 10, y: 8, pathWay: true, occupied: "none" },
    { x: 10, y: 9, pathWay: true, occupied: "none" },
    { x: 10, y: 10, pathWay: true, occupied: "none" },
    { x: 10, y: 11, pathWay: true, occupied: "none" },
    { x: 10, y: 13, pathWay: true, occupied: "none" },

    { x: 11, y: 1, pathWay: true, occupied: "none" },
    { x: 11, y: 2, pathWay: true, occupied: "none" },
    { x: 11, y: 6, pathWay: true, occupied: "none" },
    { x: 11, y: 7, pathWay: true, occupied: "none" },
    { x: 11, y: 8, pathWay: true, occupied: "none" },
    { x: 11, y: 9, pathWay: true, occupied: "none" },
    { x: 11, y: 10, pathWay: true, occupied: "none" },
    { x: 11, y: 11, pathWay: true, occupied: "none" },
    { x: 11, y: 12, pathWay: true, occupied: "none" },
    { x: 11, y: 13, pathWay: true, occupied: "none" },

    { x: 12, y: 1, pathWay: true, occupied: "none" },
    { x: 12, y: 2, pathWay: true, occupied: "none" },
    { x: 12, y: 3, pathWay: true, occupied: "none" },
    { x: 12, y: 4, pathWay: true, occupied: "none" },
    { x: 12, y: 6, pathWay: true, occupied: "none" },
    { x: 12, y: 7, pathWay: true, occupied: "none" },
    { x: 12, y: 8, pathWay: true, occupied: "none" },
    { x: 12, y: 9, pathWay: true, occupied: "none" },
    { x: 12, y: 10, pathWay: true, occupied: "none" },
    { x: 12, y: 11, pathWay: true, occupied: "none" },
    { x: 12, y: 12, pathWay: true, occupied: "none" },
    { x: 12, y: 13, pathWay: true, occupied: "none" },

    { x: 13, y: 1, pathWay: true, occupied: "none" },
    { x: 13, y: 2, pathWay: true, occupied: "none" },
    { x: 13, y: 3, pathWay: true, occupied: "none" },
    { x: 13, y: 4, pathWay: true, occupied: "none" },
    { x: 13, y: 5, pathWay: true, occupied: "none" },
    { x: 13, y: 6, pathWay: true, occupied: "none" },
    { x: 13, y: 7, pathWay: true, occupied: "none" },
    { x: 13, y: 8, pathWay: true, occupied: "none" },
    { x: 13, y: 9, pathWay: true, occupied: "none" },
    { x: 13, y: 10, pathWay: true, occupied: "none" },
    { x: 13, y: 11, pathWay: true, occupied: "none" },
    { x: 13, y: 12, pathWay: true, occupied: "none" },
    { x: 13, y: 13, pathWay: true, occupied: "none" },

];

const stage3 = [
    { x: 1, y: 1, pathWay: true, occupied: "none" },
    { x: 1, y: 2, pathWay: true, occupied: "none" },
    { x: 1, y: 3, pathWay: true, occupied: "none" },
    { x: 1, y: 4, pathWay: true, occupied: "none" },
    { x: 1, y: 6, pathWay: true, occupied: "none" },
    { x: 1, y: 7, pathWay: true, occupied: "none" },
    { x: 1, y: 8, pathWay: true, occupied: "none" },
    { x: 1, y: 9, pathWay: true, occupied: "none" },
    { x: 1, y: 10, pathWay: true, occupied: "none" },
    { x: 1, y: 11, pathWay: true, occupied: "none" },
    { x: 1, y: 12, pathWay: true, occupied: "none" },
    { x: 1, y: 13, pathWay: true, occupied: "none" },
    
    { x: 2, y: 1, pathWay: true, occupied: "none" },
    { x: 2, y: 2, pathWay: true, occupied: "none" },
    { x: 2, y: 6, pathWay: true, occupied: "none" },
    { x: 2, y: 7, pathWay: true, occupied: "none" },
    { x: 2, y: 8, pathWay: true, occupied: "none" },
    { x: 2, y: 9, pathWay: true, occupied: "none" },
    { x: 2, y: 10, pathWay: true, occupied: "none" },
    { x: 2, y: 11, pathWay: true, occupied: "none" },
    { x: 2, y: 12, pathWay: true, occupied: "none" },
    { x: 2, y: 13, pathWay: true, occupied: "none" },
    

    { x: 3, y: 1, pathWay: true, occupied: "none" },
    { x: 3, y: 2, pathWay: true, occupied: "none" },
    { x: 3, y: 4, pathWay: true, occupied: "none" },
    { x: 3, y: 5, pathWay: true, occupied: "none" },
    { x: 3, y: 6, pathWay: true, occupied: "none" },
    { x: 3, y: 10, pathWay: true, occupied: "none" },
    { x: 3, y: 11, pathWay: true, occupied: "none" },
    { x: 3, y: 12, pathWay: true, occupied: "none" },
    { x: 3, y: 13, pathWay: true, occupied: "none" },
    

    { x: 4, y: 1, pathWay: true, occupied: "none" },
    { x: 4, y: 2, pathWay: true, occupied: "none" },
    { x: 4, y: 3, pathWay: true, occupied: "none" },
    { x: 4, y: 4, pathWay: true, occupied: "none" },
    { x: 4, y: 5, pathWay: true, occupied: "none" },
    { x: 4, y: 6, pathWay: true, occupied: "none" },
    { x: 4, y: 7, pathWay: true, occupied: "none" },
    { x: 4, y: 8, pathWay: true, occupied: "none" },
    { x: 4, y: 13, pathWay: true, occupied: "none" },
    
    { x: 5, y: 1, pathWay: true, occupied: "none" },
    { x: 5, y: 2, pathWay: true, occupied: "none" },
    { x: 5, y: 3, pathWay: true, occupied: "none" },
    { x: 5, y: 4, pathWay: true, occupied: "none" },
    { x: 5, y: 6, pathWay: true, occupied: "none" },
    { x: 5, y: 7, pathWay: true, occupied: "none" },
    { x: 5, y: 8, pathWay: true, occupied: "none" },
    { x: 5, y: 9, pathWay: true, occupied: "none" },
    { x: 5, y: 10, pathWay: true, occupied: "none" },
    { x: 5, y: 11, pathWay: true, occupied: "none" },
    { x: 5, y: 13, pathWay: true, occupied: "none" },
    
    { x: 6, y: 1, pathWay: true, occupied: "none" },
    { x: 6, y: 2, pathWay: true, occupied: "none" },
    { x: 6, y: 3, pathWay: true, occupied: "none" },
    { x: 6, y: 4, pathWay: true, occupied: "none" },
    { x: 6, y: 6, pathWay: true, occupied: "none" },
    { x: 6, y: 7, pathWay: true, occupied: "none" },
    { x: 6, y: 8, pathWay: true, occupied: "none" },
    { x: 6, y: 9, pathWay: true, occupied: "none" },
    { x: 6, y: 10, pathWay: true, occupied: "none" },
    { x: 6, y: 11, pathWay: true, occupied: "none" },
    { x: 6, y: 13, pathWay: true, occupied: "none" },
    

    { x: 7, y: 6, pathWay: true, occupied: "none" },
    { x: 7, y: 7, pathWay: true, occupied: "none" },
    { x: 7, y: 8, pathWay: true, occupied: "none" },
    { x: 7, y: 9, pathWay: true, occupied: "none" },
    { x: 7, y: 10, pathWay: true, occupied: "none" },
    { x: 7, y: 11, pathWay: true, occupied: "none" },
    { x: 7, y: 13, pathWay: true, occupied: "none" },
    
    { x: 8, y: 1, pathWay: true, occupied: "none" },
    { x: 8, y: 2, pathWay: true, occupied: "none" },
    { x: 8, y: 3, pathWay: true, occupied: "none" },
    { x: 8, y: 4, pathWay: true, occupied: "none" },
    { x: 8, y: 5, pathWay: true, occupied: "none" },
    { x: 8, y: 6, pathWay: true, occupied: "none" },
    { x: 8, y: 7, pathWay: true, occupied: "none" },
    { x: 8, y: 8, pathWay: true, occupied: "none" },
    { x: 8, y: 9, pathWay: true, occupied: "none" },
    { x: 8, y: 10, pathWay: true, occupied: "none" },
    { x: 8, y: 11, pathWay: true, occupied: "none" },
    { x: 8, y: 13, pathWay: true, occupied: "none" },
  
    { x: 9, y: 1, pathWay: true, occupied: "none" },
    { x: 9, y: 2, pathWay: true, occupied: "none" },
    { x: 9, y: 4, pathWay: true, occupied: "none" },
    { x: 9, y: 5, pathWay: true, occupied: "none" },
    { x: 9, y: 6, pathWay: true, occupied: "none" },
    { x: 9, y: 7, pathWay: true, occupied: "none" },
    { x: 9, y: 8, pathWay: true, occupied: "none" },
    { x: 9, y: 9, pathWay: true, occupied: "none" },
    { x: 9, y: 10, pathWay: true, occupied: "none" },
    { x: 9, y: 11, pathWay: true, occupied: "none" },
    { x: 9, y: 13, pathWay: true, occupied: "none" },


    { x: 10, y: 1, pathWay: true, occupied: "none" },
    { x: 10, y: 2, pathWay: true, occupied: "none" },
    { x: 10, y: 4, pathWay: true, occupied: "none" },
    { x: 10, y: 5, pathWay: true, occupied: "none" },
    { x: 10, y: 6, pathWay: true, occupied: "none" },
    { x: 10, y: 7, pathWay: true, occupied: "none" },
    { x: 10, y: 8, pathWay: true, occupied: "none" },
    { x: 10, y: 9, pathWay: true, occupied: "none" },
    { x: 10, y: 10, pathWay: true, occupied: "none" },
    { x: 10, y: 11, pathWay: true, occupied: "none" },
    { x: 10, y: 13, pathWay: true, occupied: "none" },

    { x: 11, y: 1, pathWay: true, occupied: "none" },
    { x: 11, y: 2, pathWay: true, occupied: "none" },
    { x: 11, y: 6, pathWay: true, occupied: "none" },
    { x: 11, y: 7, pathWay: true, occupied: "none" },
    { x: 11, y: 8, pathWay: true, occupied: "none" },
    { x: 11, y: 9, pathWay: true, occupied: "none" },
    { x: 11, y: 10, pathWay: true, occupied: "none" },
    { x: 11, y: 11, pathWay: true, occupied: "none" },
    { x: 11, y: 12, pathWay: true, occupied: "none" },
    { x: 11, y: 13, pathWay: true, occupied: "none" },

    { x: 12, y: 1, pathWay: true, occupied: "none" },
    { x: 12, y: 2, pathWay: true, occupied: "none" },
    { x: 12, y: 3, pathWay: true, occupied: "none" },
    { x: 12, y: 4, pathWay: true, occupied: "none" },
    { x: 12, y: 9, pathWay: true, occupied: "none" },
    { x: 12, y: 10, pathWay: true, occupied: "none" },
    { x: 12, y: 11, pathWay: true, occupied: "none" },
    { x: 12, y: 12, pathWay: true, occupied: "none" },
    { x: 12, y: 13, pathWay: true, occupied: "none" },

    { x: 13, y: 1, pathWay: true, occupied: "none" },
    { x: 13, y: 2, pathWay: true, occupied: "none" },
    { x: 13, y: 3, pathWay: true, occupied: "none" },
    { x: 13, y: 4, pathWay: true, occupied: "none" },
    { x: 13, y: 5, pathWay: true, occupied: "none" },
    { x: 13, y: 6, pathWay: true, occupied: "none" },
    { x: 13, y: 7, pathWay: true, occupied: "none" },
    { x: 13, y: 8, pathWay: true, occupied: "none" },
    { x: 13, y: 9, pathWay: true, occupied: "none" },
    { x: 13, y: 10, pathWay: true, occupied: "none" },
    { x: 13, y: 11, pathWay: true, occupied: "none" },
    { x: 13, y: 12, pathWay: true, occupied: "none" },
    { x: 13, y: 13, pathWay: true, occupied: "none" },

    
];

const stage4 = [
    { x: 1, y: 1, pathWay: true, occupied: "none" },
    { x: 1, y: 2, pathWay: true, occupied: "none" },
    { x: 1, y: 3, pathWay: true, occupied: "none" },
    { x: 1, y: 4, pathWay: true, occupied: "none" },
    { x: 1, y: 5, pathWay: true, occupied: "none" },
    { x: 1, y: 6, pathWay: true, occupied: "none" },
    { x: 1, y: 7, pathWay: true, occupied: "none" },
    { x: 1, y: 8, pathWay: true, occupied: "none" },
    { x: 1, y: 9, pathWay: true, occupied: "none" },
    { x: 1, y: 10, pathWay: true, occupied: "none" },
    { x: 1, y: 11, pathWay: true, occupied: "none" },
    { x: 1, y: 12, pathWay: true, occupied: "none" },
    { x: 1, y: 13, pathWay: true, occupied: "none" },

    { x: 2, y: 1, pathWay: true, occupied: "none" },
    { x: 2, y: 2, pathWay: true, occupied: "none" },
    { x: 2, y: 6, pathWay: true, occupied: "none" },
    { x: 2, y: 7, pathWay: true, occupied: "none" },
    { x: 2, y: 8, pathWay: true, occupied: "none" },
    { x: 2, y: 9, pathWay: true, occupied: "none" },
    { x: 2, y: 10, pathWay: true, occupied: "none" },
    { x: 2, y: 12, pathWay: true, occupied: "none" },
    { x: 2, y: 13, pathWay: true, occupied: "none" },

    { x: 3, y: 1, pathWay: true, occupied: "none" },
    { x: 3, y: 2, pathWay: true, occupied: "none" },
    { x: 3, y: 6, pathWay: true, occupied: "none" },
    { x: 3, y: 7, pathWay: true, occupied: "none" },
    { x: 3, y: 8, pathWay: true, occupied: "none" },
    { x: 3, y: 10, pathWay: true, occupied: "none" },
    { x: 3, y: 11, pathWay: true, occupied: "none" },
    { x: 3, y: 12, pathWay: true, occupied: "none" },
    { x: 3, y: 13, pathWay: true, occupied: "none" },
    
    { x: 4, y: 1, pathWay: true, occupied: "none" },
    { x: 4, y: 2, pathWay: true, occupied: "none" },
    { x: 4, y: 3, pathWay: true, occupied: "none" },
    { x: 4, y: 4, pathWay: true, occupied: "none" },
    { x: 4, y: 5, pathWay: true, occupied: "none" },
    { x: 4, y: 6, pathWay: true, occupied: "none" },
    { x: 4, y: 7, pathWay: true, occupied: "none" },
    { x: 4, y: 8, pathWay: true, occupied: "none" },
    { x: 4, y: 9, pathWay: true, occupied: "none" },
    { x: 4, y: 11, pathWay: true, occupied: "none" },
    { x: 4, y: 13, pathWay: true, occupied: "none" },

    { x: 5, y: 1, pathWay: true, occupied: "none" },
    { x: 5, y: 2, pathWay: true, occupied: "none" },
    { x: 5, y: 3, pathWay: true, occupied: "none" },
    { x: 5, y: 4, pathWay: true, occupied: "none" },
    { x: 5, y: 5, pathWay: true, occupied: "none" },
    { x: 5, y: 6, pathWay: true, occupied: "none" },
    { x: 5, y: 7, pathWay: true, occupied: "none" },
    { x: 5, y: 8, pathWay: true, occupied: "none" },
    { x: 5, y: 9, pathWay: true, occupied: "none" },
    { x: 5, y: 13, pathWay: true, occupied: "none" },
    
    { x: 6, y: 1, pathWay: true, occupied: "none" },
    { x: 6, y: 2, pathWay: true, occupied: "none" },
    { x: 6, y: 6, pathWay: true, occupied: "none" },
    { x: 6, y: 8, pathWay: true, occupied: "none" },
    { x: 6, y: 9, pathWay: true, occupied: "none" },
    { x: 6, y: 11, pathWay: true, occupied: "none" },
    { x: 6, y: 13, pathWay: true, occupied: "none" },
    

    { x: 7, y: 1, pathWay: true, occupied: "none" },
    { x: 7, y: 2, pathWay: true, occupied: "none" },
    { x: 7, y: 6, pathWay: true, occupied: "none" },
    { x: 7, y: 8, pathWay: true, occupied: "none" },
    { x: 7, y: 9, pathWay: true, occupied: "none" },
    { x: 7, y: 10, pathWay: true, occupied: "none" },
    { x: 7, y: 11, pathWay: true, occupied: "none" },
    { x: 7, y: 12, pathWay: true, occupied: "none" },
    { x: 7, y: 13, pathWay: true, occupied: "none" },
    

    { x: 8, y: 1, pathWay: true, occupied: "none" },
    { x: 8, y: 2, pathWay: true, occupied: "none" },
    { x: 8, y: 6, pathWay: true, occupied: "none" },
    { x: 8, y: 13, pathWay: true, occupied: "none" },
    

    { x: 9, y: 1, pathWay: true, occupied: "none" },
    { x: 9, y: 2, pathWay: true, occupied: "none" },
    { x: 9, y: 3, pathWay: true, occupied: "none" },
    { x: 9, y: 4, pathWay: true, occupied: "none" },
    { x: 9, y: 5, pathWay: true, occupied: "none" },
    { x: 9, y: 6, pathWay: true, occupied: "none" },
    { x: 9, y: 7, pathWay: true, occupied: "none" },
    { x: 9, y: 8, pathWay: true, occupied: "none" },
    { x: 9, y: 9, pathWay: true, occupied: "none" },
    { x: 9, y: 10, pathWay: true, occupied: "none" },
    { x: 9, y: 11, pathWay: true, occupied: "none" },
    { x: 9, y: 13, pathWay: true, occupied: "none" },


    { x: 10, y: 1, pathWay: true, occupied: "none" },
    { x: 10, y: 2, pathWay: true, occupied: "none" },
    { x: 10, y: 3, pathWay: true, occupied: "none" },
    { x: 10, y: 4, pathWay: true, occupied: "none" },
    { x: 10, y: 5, pathWay: true, occupied: "none" },
    { x: 10, y: 6, pathWay: true, occupied: "none" },
    { x: 10, y: 7, pathWay: true, occupied: "none" },
    { x: 10, y: 8, pathWay: true, occupied: "none" },
    { x: 10, y: 9, pathWay: true, occupied: "none" },
    { x: 10, y: 10, pathWay: true, occupied: "none" },
    { x: 10, y: 11, pathWay: true, occupied: "none" },
    { x: 10, y: 13, pathWay: true, occupied: "none" },

    { x: 11, y: 1, pathWay: true, occupied: "none" },
    { x: 11, y: 2, pathWay: true, occupied: "none" },
    { x: 11, y: 3, pathWay: true, occupied: "none" },
    { x: 11, y: 8, pathWay: true, occupied: "none" },
    { x: 11, y: 9, pathWay: true, occupied: "none" },
    { x: 11, y: 10, pathWay: true, occupied: "none" },
    { x: 11, y: 11, pathWay: true, occupied: "none" },
    { x: 11, y: 12, pathWay: true, occupied: "none" },
    { x: 11, y: 13, pathWay: true, occupied: "none" },

    { x: 12, y: 1, pathWay: true, occupied: "none" },
    { x: 12, y: 2, pathWay: true, occupied: "none" },
    { x: 12, y: 3, pathWay: true, occupied: "none" },
    { x: 12, y: 8, pathWay: true, occupied: "none" },
    { x: 12, y: 9, pathWay: true, occupied: "none" },
    { x: 12, y: 10, pathWay: true, occupied: "none" },
    { x: 12, y: 11, pathWay: true, occupied: "none" },
    { x: 12, y: 12, pathWay: true, occupied: "none" },
    { x: 12, y: 13, pathWay: true, occupied: "none" },

    { x: 13, y: 1, pathWay: true, occupied: "none" },
    { x: 13, y: 2, pathWay: true, occupied: "none" },
    { x: 13, y: 3, pathWay: true, occupied: "none" },
    { x: 13, y: 4, pathWay: true, occupied: "none" },
    { x: 13, y: 5, pathWay: true, occupied: "none" },
    { x: 13, y: 6, pathWay: true, occupied: "none" },
    { x: 13, y: 7, pathWay: true, occupied: "none" },
    { x: 13, y: 8, pathWay: true, occupied: "none" },
    { x: 13, y: 9, pathWay: true, occupied: "none" },
    { x: 13, y: 10, pathWay: true, occupied: "none" },
    { x: 13, y: 11, pathWay: true, occupied: "none" },
    { x: 13, y: 12, pathWay: true, occupied: "none" },
    { x: 13, y: 13, pathWay: true, occupied: "none" },

];


module.exports = {
    stage1, stage2, stage3, stage4
}