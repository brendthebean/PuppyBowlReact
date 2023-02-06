const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const fetchAllPlayers = async () => {
    try { 
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        if(result.error) {
            throw result.error;
        }
        return result.data.players;
    } catch (err){
        console.log(err);
    }
};

export default fetchAllPlayers;