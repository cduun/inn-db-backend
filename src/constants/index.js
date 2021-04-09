// vcap names
exports.IBM_CLOUD_CLOUDANT = "cloudantNoSQLDB";
exports.IPSB_CLOUDANT = "IPSB-Cloudant";

exports.IBM_CLOUD_REDIS = "databases-for-redis";
exports.IPSB_SOCKET_PUB_SUB = "IPSB-Socket-Pub-Sub";
exports.IPSB_STATESTORE = "IPSB-StateStore";

exports.IBM_CLOUD_OBJECT_STORAGE = "cloud-object-storage";
exports.IBM_CLOUD_IPSB_OBJECT_STORAGE = "IPSB-CloudObjectStorage";

// document prefixes
exports.LOG_DB_PREDEFINED_DATA = "predefined_data";
exports.INSTRUCTIONS_LIST_KEY = "instructions_list";
exports.INSTRUCTIONS_VIEW_KEY = "wi";
exports.TOPFILES_VIEW_KEY = "tf";
exports.TRANSACTIONS_VIEW_KEY = "ta";
exports.TIMELINE_VIEW_KEY = "timeline"
exports.DOCS_INDEX = "docs";
exports.FILENAME_INDEX = "filename";
exports.INSTRUCTIONS_GROUP_INDEX = "groups"
exports.TIMELINE_UNIQUE_USERS_INDEX = "unique_users";

// model integration
exports.MODEL_N1_QUERY = "query_l1";
exports.MODEL_N2_QUERY = "query_l2";
exports.TRAIN_SCRATCH = "train_scratch";

// token expiry
exports.TOKEN_EXPIRE = "10h";


// database names for prod and dev
exports.USER_DB_NAMES = {
  prod: "userdb",
  dev: "userdb_dev",
}

exports.LOG_DB_NAMES = {
  prod: "logdb",
  dev: "logdb_dev"
}

exports.TIMELINE_DB_NAMES = {
  prod: "timelinedb",
  dev: "timelinedb_dev"
}

exports.WORK_INSTRUCTION_DB_NAMES = {
  prod: "workinstructions",
  dev: "workinstructions_dev",
}

exports.TRANSACTION_DB_NAMES = {
  prod: "transactions",
  dev: "transactions_dev",
}

exports.TOPFILES_DB_NAMES = {
  prod: "topfiles",
  dev: "topfiles_dev",
}

exports.WORK_INSTRUCTION_DB_NAMES_REPLICA = {
  prod: "workinstructions_replica",
  dev: "workinstructions_dev_replica",
}

exports.TRANSACTION_DB_NAMES_REPLICA = {
  prod: "transactions_replica",
  dev: "transactions_dev_replica",
}

exports.TOPFILES_DB_NAMES_REPLICA = {
  prod: "topfiles_replica",
  dev: "topfiles_dev_replica",
}

// redis prefix for statestore
exports.PREFIX_REDIS_STATESTORE_NAMES = {
  prod: "statestore",
  dev: "statestore_dev",
}

//redis prefix for socket cluster
exports.PREFIX_REDIS_SOCKET_CLUSTER_NAMES = {
  prod: "socketCluster",
  dev: "socketCluster_dev",
}

//cloud object storage prefix
exports.PREFIX_COS_BUCKET = {
  prod: "",
  dev: "dev.",
}

// model integration
exports.MODEL_BASE_URL = {
  prod: "https://ml.ipsb.dk/",
  dev: "https://ipsb-ml-london-dev.eu-gb.mybluemix.net/"
}

// model refresh
exports.MODEL_REFRESH_URL = {
  prod: ['https://ipsb-ml-london.eu-gb.mybluemix.net/', 'https://ipsb-ml-frankfurt.eu-de.mybluemix.net/'],
  dev: ["https://ipsb-ml-london-dev.eu-gb.mybluemix.net/"]
}

// mime types
exports.XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
exports.PDF_MIME = "application/pdf";