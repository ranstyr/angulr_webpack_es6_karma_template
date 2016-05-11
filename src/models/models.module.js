import { GroupAttributes }   from './group-attributes';
import { UserData }          from './user-data';
import { Portfolios }          from './portfolios';

export default angular.module('si.models', [])
    .service('GroupAttributes', GroupAttributes)
    .service('UserData', UserData)
    .service('Portfolios', Portfolios);