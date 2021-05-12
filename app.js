var friends = ["John", 'Jake', 'Kobi', 'Jingleheimer', 'Schmidt']

function song99() {
    let lines;
    let count;
    for (let i = 0; i < friends.length; i++) {
        for (count = 99; count > 0; count--) {
            if (count === 1) {
                lines = "line"
            } else {
                lines = "lines"
            }
            console.log(`${count} ${lines} of code on the wall`)
            if (count < 99) {
                console.log("");
                console.log(`${count} ${lines} of code on the wall`);
            }
            console.log(`${count} ${lines} of code`);
            console.log(`The computer of ${friends[i]} went cold and Lo and Behold`);

            if (count === 1) {
                console.log("No lines of code on the wall");
                console.log("")
                
            

        }


    }
}
}

song99()
