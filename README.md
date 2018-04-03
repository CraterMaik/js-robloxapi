# Roblox api referential

> This is a list of useful objects from roblox users, supported by Roblox at http://api.roblox.com/docs.



## Install

```
$ npm install --save js-robloxapi
```


## Usage

```js
const jsroblox = require('js-robloxapi');


jsroblox.getInfo('UsernameRoblox', (data) => {
    if (!data) return console.log('User not found!');   
    console.log(`Roblox UserName: ${data.Name}, Roblox Id: ${data.Id}, Roblox Friends: ${data.TotalFriends}`);

});
```


## OBJECTS

```
# Name         : Username in roblox.
# Id           : Id in roblox.
# Online       : State in roblox.
# TotalFriends : Total of friends in roblox.
# Avatar       : Avatar in roblox.
# AvatarMin    : Avatar mode miniature in roblox.
# ListFriends  : Friends list in roblox.
# ListBadges   : List of badges in roblox.
# ListGroup    : Groups list in roblox. 

```


## REFERENCE

[ROBLOX API DOC](http://api.roblox.com/docs)
