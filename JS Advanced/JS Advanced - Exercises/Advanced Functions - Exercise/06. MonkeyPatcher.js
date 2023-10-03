function solution(cmd) {
    /**
     *  functionality:
     *      upvote
     *      downvote
     *      total votes
     *      score =>
     *          invocing subfunctions :
        *           rating -> percentage calculations 
            *          obfuscation -  returns scores with added 25% 
            *          of the greater number 
     *          report positive and negative votes, 
        *              balance and rating in an   
        *              array; obfuscation rules apply 
     *              
     * post {
     *  upvotes : num
     *  downvotes : num
     *  total votes : upvotes - downvotes
     *  rating : value, returned by calc rating()
     *  returning scores 
     * }
     */

    const funcs = {
        upvote: function (obj) {
            obj['upvotes'] += 1;
        },
        downvote: function (obj) {
            obj['downvotes'] += 1;
        },

        score: function (obj) {

            // console.log([...this.getValues(obj), ...this.getRating(obj)]);
            return [...this.getValues(obj), ...this.getRating(obj)];
        },
        getValues: function (obj) {
            const postUpvotes = obj['upvotes'];
            const postDownvotes = obj['downvotes'];
            let obfuscationNum = 0;
            const isAboveFifty = (postUpvotes + postDownvotes) > 50;
            if (isAboveFifty) {
                let biggerNum = postUpvotes;
                if (postUpvotes < postDownvotes) {
                    biggerNum = postDownvotes;
                }
                obfuscationNum = Math.ceil(0.25 * biggerNum);
            }
            return [postUpvotes + obfuscationNum, postDownvotes + obfuscationNum];
        },

        getRating: function (obj) {
            let rating = 'new';
            const upvotes = obj['upvotes'];
            const downvotes = obj['downvotes'];
            // const [upvotes, downvotes] = this.getValues(obj)
            const totalVotes = upvotes + downvotes;
            const balance = upvotes - downvotes;
            // determinr rating                             // Might be wrong
            if (totalVotes >= 10) {
                if (upvotes > (0.66 * totalVotes)) {
                    rating = 'hot';
                } else if ((totalVotes > 100) && (balance >= 0)) {
                    rating = 'controversial';
                } else if (balance < 0) {
                    rating = 'unpopular';
                } else {
                    rating = 'new';
                }
            } else {
                rating = 'new';
            }
            return [balance, rating];
        },
    };
    return funcs[cmd](this);
}



let post = {
    id: '3',
    author: 'emil', content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score'); 