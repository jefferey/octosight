import GitHub from 'github-api';

const __gh = new GitHub();

class GitHubApi {
    static getTopRepos() {
        __gh.search().forRepositories({
            q: "tetris+language:assembly",
            sort: "stars",
            order: "desc"
        }).then(data => {
            console.log("SUCCESS!");
            console.log(data);
        }).catch(err => {
            console.log("ERROR!");
            console.log(err);
        });
    }
}

export default GitHubApi;
