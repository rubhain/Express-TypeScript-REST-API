export default {
    port : 1337,
    dbUri :"mongodb://localhost:27017/rest-api-tutorial",
    saltWorkFactor: 10,
    accessTokenTtl: '15m',
    refreshTokenTtl: '1y',
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApcrJ9wv3p/Vm/8VHWoS1
kzHUdHjOg6RDqiUwkS9jHb/8ddxoDiIbu8G1eRTpIjeWrwfkrRzbMw4K9ZsWEhSN
et/75akQs057tyywb65BaIYAhmZ287f2MxowAW5ivHDJMtfWnGINcBq6SiQ5/Jkk
Pl1akn4vPyai+5xZ+SbDT1pN4G6NE9j3T59tHFGJ2oSFETkE3w5CRR/on7fVhhf7
zFlvickQadW75mdQmF1fV0QxTcdyk9YzrvetZh+k3EYa+B1WucE1O3lPpIcI8G7J
afx4MvJqmpy002IeLDMrzQBUv3vTYHaJLAsB7wC0GTijP0C3i7Jre/J7PT/PhdEi
qQIDAQAB
-----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN PRIVATE KEY-----
-----END PRIVATE KEY-----`
};