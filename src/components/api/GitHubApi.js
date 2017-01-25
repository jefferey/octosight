import GitHub from 'github-api';
//import * as Moment from "moment";

const __gh = new GitHub({ username: 'jefferey' });
const moment = require('moment');

class GitHubApi {
    static getTopRepos(timespan) {
        //console.log(Moment);
        let days = timespan || 30;
        let date = moment().subtract(days, 'days').format('YYYY-MM-DD');
        return __gh.search().forRepositories({
            q: 'stars:\>=500 created:\>' + date,
            sort: 'stars',
            order: 'desc'
        });
    }

    static getContributors(fullName) {
        return __gh.getRepo(fullName).getContributors();
    }

    static getUser(login) {
        return __gh.getUser(login).getProfile();
    }

    static getRateLimit() {
        return __gh.getRateLimit().getRateLimit();
    }
}

export default GitHubApi;
