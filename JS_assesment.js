/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_age,_height,_location) {
    const NFT={
        name:_name,
        age:_age,
        height:_height,
        location:_location
    };
    NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("ID  \t : "+(i+1) +"\n");
        console.log("Name  \t :  "+NFTs[i].name);
        console.log("Age   \t :  "+NFTs[i].age);
        console.log("Height   :  "+NFTs[i].height);
        console.log("Location :  "+NFTs[i].location);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT entries are : "+NFTs.length);
}

// call your functions below this line
mintNFT("Bob",19,"180cm","USA");
mintNFT("Alice",18,"190cm","Russia");
mintNFT("Chef",19,"200cm","India");
mintNFT("Brian",20,"160cm","USA");

getTotalSupply();

listNFTs();

