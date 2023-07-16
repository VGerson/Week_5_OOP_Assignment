class BandMember {
    constructor(name, instrument){   // Created class with constructor that takes two arguments 
        this.name = name;
        this.instrument = instrument;
    }

    describe(){
        return `${this.name} plays the ${this.instrument}.`; // Describing band member name and instrument
    } 
}
// //--Testing --
// let BandMember1 = new BandMember ('Gerson', 'Trumpet');
// console.log(BandMember1.describe());

class Band{
    constructor(name){  // Created class called band that takes only 1 argument
        this.name = name;
        this.members = []; // Empty array to store each band member created
    }

    addNewMember(member){
        if (member instanceof BandMember){
            this.members.push(member); // Pushing each band member to the empty array
        }
    }

    describe(){
        return '           ' + `${this.name} has ${this.members.length} members.`;
    }
}

// //--Testing --
// let Band1 = new Band ('Kiss', '6');
// console.log(Band1.describe());

class Menu {
    constructor(){
        this.bands = [];
        this.selectedBand = undefined; // We have no Bands at first so no bands have been selected. 
    }

    start(){
        let selection = this.mainMenu();
        while (selection != 0){
            switch(selection){
                case '1' :
                    this.createBand();
                    break;
                case '2' :
                    this.viewBand();
                    break;
                case '3' :
                    this.removeBand();
                    break;
                default:
                    selection = 0;
            }
            selection = this.mainMenu();
        }
        alert('Goodbye!');
    }

    mainMenu(){
        return prompt(
            `
            MENU
            ---------------
            Enter the index you want to access!
            0) exit app
            1) add new band
            2) view band
            3) remove band
            `
        );
    }

    bandMenu(bandInfo){
        return prompt(
            `
            ${bandInfo}
            -------------------------
            Enter the index you want to access!
            0) back to main menu
            1) add new band member
            2) remove band member
            -------------------------
            
            `
        );
    }

    createBand(){
        let name = prompt('Enter name for new Band: ');
        this.bands.push(new Band(name));
    }

    viewBand(){
        let index = prompt(`Enter the index of the band you want to view`);
        if(index > - 1 && index <  this.bands.length){
            this.selectedBand = this.bands[index];

            let description = 'Band Name: ' + this.selectedBand.name + ' \n';
            description += ' ' + this.selectedBand.describe() + '\n';

            for (let index = 0; index < this.selectedBand.members.length; index++){
                description += index + ' )' + this.selectedBand.members[index].describe() + '\n';
            }

            let option1 = this.bandMenu(description);
            switch(option1){
                case '1' :
                    this.addMember();
                    break;
                case '2' :
                    this.removeMember();
            }
        }
    }

    removeBand(){
        let index = prompt(`Enter the index of the band you want to remove: `);
        if(index > -1 && index < this.bands.length){
            this.bands.splice(index,1);
        }
    }

    addMember(){
        let name = prompt(`Enter name for new member: `);
        let instrument = prompt('Enter the name of the instrument the new member will play');
        this.selectedBand.members.push(new BandMember(name, instrument));
    }

    removeMember(){
        let index = prompt('Enter the index of the member you wish to remove: ');
        if(index > -1 && index < this.selectedBand.members.length){
            this.selectedBand.members.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();

















