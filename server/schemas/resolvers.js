const {Hello} = require ('../models')

const resolvers = {
    Query: {
        hello:()=>'hellow, world',
    },
};

module.exports = resolvers;