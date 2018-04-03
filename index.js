const request = require('request');


var myFunction = {};

myFunction.getInfo = function (name, ls) {
    request(`http://api.roblox.com/users/get-by-username?username=${name}`, (err, res, data) => {
        let objusers = JSON.parse(data);
        let status;

        if (objusers.Id === undefined) {
            let Errormsg = null;
            ls(Errormsg);

        } else {
            let avatar = 'https://www.roblox.com/Thumbs/Avatar.ashx?x=420&y=420&username=' + name;
            let avatarMin = 'https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&username=' + name;

            if (objusers.IsOnline) {
                status = 'Yes'
            } else {
                status = 'No'
            }

            request(`https://www.roblox.com/friends/json?userId=${objusers.Id}&currentPage=0&pageSize=20&imgWidth=110&imgHeight=110&imgFormat=jpeg&friendsType=BestFriends`, (err, res, body) => {
                let objfriends = JSON.parse(body);
                const listFriends = objfriends.Friends;
                let listAllFriends = listFriends.map(l => l.Username);


                request(`https://www.roblox.com/badges/roblox?userId=${objusers.Id}&imgWidth=110&imgHeight=110&imgFormat=png`, (err, res, body) => {
                    let objbadges = JSON.parse(body);
                    const listbadges = objbadges.RobloxBadges;
                    let listAllBadges = listbadges.map(l => l.Name);

                    request(`http://api.roblox.com/users/${objusers.Id}/groups`, function (error, response, body) {
                        let objgroups = JSON.parse(body);
                        let listALLgroupName = objgroups.map(l => l.Name);

                        const list =
                            {
                                "Name": objusers.Username,
                                "Id": objusers.Id,
                                "Online": status,
                                "Avatar": avatar,
                                "AvatarMin": avatarMin,
                                "TotalFriends": objfriends.TotalFriends,
                                "ListFriends": listAllFriends,
                                "ListBadges": listAllBadges,
                                "ListGroup": listALLgroupName

                            }

                        ls(list)
                    })

                })
            })
        }

    })
}

module.exports = myFunction
