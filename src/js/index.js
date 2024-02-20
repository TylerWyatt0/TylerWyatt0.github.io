const copyEmail = async () => {
    try {
        const element = document.querySelector(".email");
        await navigator.clipboard.writeText("twyatt6@gmu.edu");
        document.querySelector("#copy").classList.add("d-none");
        document.querySelector("#check").classList.remove("d-none");

    } catch (err) {
        console.error("Copy clipboard failed D;", err);
        //Hopefully user will figure out that it failed if no UI changes occur :/
    }
};
