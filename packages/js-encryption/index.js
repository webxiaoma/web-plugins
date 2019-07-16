
/**
 * sha1 算法
 **/
exports.sha1 = require('./lib/sha1.js').sha1;
exports.hmacSha1 = require('./lib/sha1.js').hmacSha1; //hmacSha1 算法

/**
 * sha256 算法
 **/
exports.sha256 = require('./lib/sha256.js').sha256;

/**
 * md5 算法
 **/
exports.md5 = require('./lib/md5.js');

/**
 * base64 算法
 **/
exports.btoa = require('./lib/base64.js').btoa; // 加密
exports.atob = require('./lib/base64.js').atob; // 解密

