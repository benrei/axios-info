module.exports.status = function(res){
  if(res && res.status) return res.status;
};

module.exports.statusText = function(res){
  if(res && res.statusText) return res.statusText;
};

module.exports.config = function(res){
  if(res && res.config) return res.config;
};

module.exports.method = function(res){
  if(res && res.request) return res.request.method;
};

module.exports.path = function(res){
  if(res && res.path) return res.request.path;
};

module.exports.url = function(res){
  if(res && res.request && res.request.res)
    return res.request.res.responseUrl;
};