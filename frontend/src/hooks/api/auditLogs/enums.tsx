export enum ActorType {
  PLATFORM = "platform",
  KMIP_CLIENT = "kmipClient",
  USER = "user",
  SERVICE = "service",
  IDENTITY = "identity",
  UNKNOWN_USER = "unknownUser"
}

export enum UserAgentType {
  WEB = "web",
  CLI = "cli",
  K8_OPERATOR = "k8-operator",
  TERRAFORM = "terraform",
  NODE_SDK = "InfisicalNodeSDK",
  PYTHON_SDK = "InfisicalPythonSDK",
  OTHER = "other"
}

export enum EventType {
  GET_SECRETS = "get-secrets",
  DELETE_SECRETS = "delete-secrets",
  CREATE_SECRETS = "create-secrets",
  UPDATE_SECRETS = "update-secrets",
  GET_SECRET = "get-secret",
  CREATE_SECRET = "create-secret",
  UPDATE_SECRET = "update-secret",
  DELETE_SECRET = "delete-secret",
  GET_WORKSPACE_KEY = "get-workspace-key",
  AUTHORIZE_INTEGRATION = "authorize-integration",
  UPDATE_INTEGRATION_AUTH = "update-integration-auth",
  UNAUTHORIZE_INTEGRATION = "unauthorize-integration",
  CREATE_INTEGRATION = "create-integration",
  DELETE_INTEGRATION = "delete-integration",
  ADD_TRUSTED_IP = "add-trusted-ip",
  UPDATE_TRUSTED_IP = "update-trusted-ip",
  DELETE_TRUSTED_IP = "delete-trusted-ip",
  CREATE_SERVICE_TOKEN = "create-service-token", // v2
  DELETE_SERVICE_TOKEN = "delete-service-token", // v2
  CREATE_IDENTITY = "create-identity",
  UPDATE_IDENTITY = "update-identity",
  DELETE_IDENTITY = "delete-identity",
  LOGIN_IDENTITY_UNIVERSAL_AUTH = "login-identity-universal-auth",
  ADD_IDENTITY_UNIVERSAL_AUTH = "add-identity-universal-auth",
  UPDATE_IDENTITY_UNIVERSAL_AUTH = "update-identity-universal-auth",
  GET_IDENTITY_UNIVERSAL_AUTH = "get-identity-universal-auth",
  CREATE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET = "create-identity-universal-auth-client-secret",
  REVOKE_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRET = "revoke-identity-universal-auth-client-secret",
  GET_IDENTITY_UNIVERSAL_AUTH_CLIENT_SECRETS = "get-identity-universal-auth-client-secret",

  LOGIN_IDENTITY_LDAP_AUTH = "login-identity-ldap-auth",
  ADD_IDENTITY_LDAP_AUTH = "add-identity-ldap-auth",
  UPDATE_IDENTITY_LDAP_AUTH = "update-identity-ldap-auth",
  GET_IDENTITY_LDAP_AUTH = "get-identity-ldap-auth",
  REVOKE_IDENTITY_LDAP_AUTH = "revoke-identity-ldap-auth",

  CREATE_ENVIRONMENT = "create-environment",
  UPDATE_ENVIRONMENT = "update-environment",
  DELETE_ENVIRONMENT = "delete-environment",
  ADD_WORKSPACE_MEMBER = "add-workspace-member",
  REMOVE_WORKSPACE_MEMBER = "remove-workspace-member",
  CREATE_FOLDER = "create-folder",
  UPDATE_FOLDER = "update-folder",
  DELETE_FOLDER = "delete-folder",
  CREATE_WEBHOOK = "create-webhook",
  UPDATE_WEBHOOK_STATUS = "update-webhook-status",
  DELETE_WEBHOOK = "delete-webhook",
  WEBHOOK_TRIGGERED = "webhook-triggered",
  GET_SECRET_IMPORTS = "get-secret-imports",
  CREATE_SECRET_IMPORT = "create-secret-import",
  UPDATE_SECRET_IMPORT = "update-secret-import",
  DELETE_SECRET_IMPORT = "delete-secret-import",
  UPDATE_USER_WORKSPACE_ROLE = "update-user-workspace-role",
  UPDATE_USER_WORKSPACE_DENIED_PERMISSIONS = "update-user-workspace-denied-permissions",
  CREATE_CA = "create-certificate-authority",
  GET_CA = "get-certificate-authority",
  UPDATE_CA = "update-certificate-authority",
  DELETE_CA = "delete-certificate-authority",
  GET_CA_CSR = "get-certificate-authority-csr",
  GET_CA_CERT = "get-certificate-authority-cert",
  SIGN_INTERMEDIATE = "sign-intermediate",
  IMPORT_CA_CERT = "import-certificate-authority-cert",
  GET_CA_CRL = "get-certificate-authority-crl",
  ISSUE_CERT = "issue-cert",
  IMPORT_CERT = "import-cert",
  GET_CERT = "get-cert",
  DELETE_CERT = "delete-cert",
  REVOKE_CERT = "revoke-cert",
  GET_CERT_BODY = "get-cert-body",
  GET_CERT_PRIVATE_KEY = "get-cert-private-key",
  GET_CERT_BUNDLE = "get-cert-bundle",
  CREATE_PKI_ALERT = "create-pki-alert",
  GET_PKI_ALERT = "get-pki-alert",
  UPDATE_PKI_ALERT = "update-pki-alert",
  DELETE_PKI_ALERT = "delete-pki-alert",
  CREATE_PKI_COLLECTION = "create-pki-collection",
  GET_PKI_COLLECTION = "get-pki-collection",
  UPDATE_PKI_COLLECTION = "update-pki-collection",
  DELETE_PKI_COLLECTION = "delete-pki-collection",
  GET_PKI_COLLECTION_ITEMS = "get-pki-collection-items",
  ADD_PKI_COLLECTION_ITEM = "add-pki-collection-item",
  DELETE_PKI_COLLECTION_ITEM = "delete-pki-collection-item",
  ORG_ADMIN_ACCESS_PROJECT = "org-admin-accessed-project",
  ORG_ADMIN_BYPASS_SSO = "org-admin-bypassed-sso",
  CREATE_CERTIFICATE_TEMPLATE = "create-certificate-template",
  UPDATE_CERTIFICATE_TEMPLATE = "update-certificate-template",
  DELETE_CERTIFICATE_TEMPLATE = "delete-certificate-template",
  GET_CERTIFICATE_TEMPLATE = "get-certificate-template",
  CREATE_CERTIFICATE_TEMPLATE_EST_CONFIG = "create-certificate-template-est-config",
  UPDATE_CERTIFICATE_TEMPLATE_EST_CONFIG = "update-certificate-template-est-config",
  GET_CERTIFICATE_TEMPLATE_EST_CONFIG = "get-certificate-template-est-config",
  UPDATE_PROJECT_WORKFLOW_INTEGRATION_CONFIG = "update-project-workflow-integration-config",
  GET_PROJECT_WORKFLOW_INTEGRATION_CONFIG = "get-project-workflow-integration-config",
  INTEGRATION_SYNCED = "integration-synced",
  CREATE_SHARED_SECRET = "create-shared-secret",
  DELETE_SHARED_SECRET = "delete-shared-secret",
  READ_SHARED_SECRET = "read-shared-secret",
  CREATE_CMEK = "create-cmek",
  UPDATE_CMEK = "update-cmek",
  DELETE_CMEK = "delete-cmek",
  GET_CMEKS = "get-cmeks",
  GET_CMEK = "get-cmek",
  CMEK_ENCRYPT = "cmek-encrypt",
  CMEK_DECRYPT = "cmek-decrypt",
  CMEK_SIGN = "cmek-sign",
  CMEK_VERIFY = "cmek-verify",
  CMEK_LIST_SIGNING_ALGORITHMS = "cmek-list-signing-algorithms",
  CMEK_GET_PUBLIC_KEY = "cmek-get-public-key",
  UPDATE_EXTERNAL_GROUP_ORG_ROLE_MAPPINGS = "update-external-group-org-role-mapping",
  GET_EXTERNAL_GROUP_ORG_ROLE_MAPPINGS = "get-external-group-org-role-mapping",
  GET_PROJECT_TEMPLATES = "get-project-templates",
  GET_PROJECT_TEMPLATE = "get-project-template",
  CREATE_PROJECT_TEMPLATE = "create-project-template",
  UPDATE_PROJECT_TEMPLATE = "update-project-template",
  DELETE_PROJECT_TEMPLATE = "delete-project-template",
  GET_APP_CONNECTIONS = "get-app-connections",
  GET_AVAILABLE_APP_CONNECTIONS_DETAILS = "get-available-app-connections-details",
  GET_APP_CONNECTION = "get-app-connection",
  CREATE_APP_CONNECTION = "create-app-connection",
  UPDATE_APP_CONNECTION = "update-app-connection",
  DELETE_APP_CONNECTION = "delete-app-connection",
  GET_SECRET_SYNCS = "get-secret-syncs",
  GET_SECRET_SYNC = "get-secret-sync",
  CREATE_SECRET_SYNC = "create-secret-sync",
  UPDATE_SECRET_SYNC = "update-secret-sync",
  DELETE_SECRET_SYNC = "delete-secret-sync",
  SECRET_SYNC_SYNC_SECRETS = "secret-sync-sync-secrets",
  SECRET_SYNC_IMPORT_SECRETS = "secret-sync-import-secrets",
  SECRET_SYNC_REMOVE_SECRETS = "secret-sync-remove-secrets",
  OIDC_GROUP_MEMBERSHIP_MAPPING_ASSIGN_USER = "oidc-group-membership-mapping-assign-user",
  OIDC_GROUP_MEMBERSHIP_MAPPING_REMOVE_USER = "oidc-group-membership-mapping-remove-user",
  CREATE_KMIP_CLIENT = "create-kmip-client",
  UPDATE_KMIP_CLIENT = "update-kmip-client",
  DELETE_KMIP_CLIENT = "delete-kmip-client",
  GET_KMIP_CLIENT = "get-kmip-client",
  GET_KMIP_CLIENTS = "get-kmip-clients",
  CREATE_KMIP_CLIENT_CERTIFICATE = "create-kmip-client-certificate",
  SETUP_KMIP = "setup-kmip",
  GET_KMIP = "get-kmip",
  REGISTER_KMIP_SERVER = "register-kmip-server",
  KMIP_OPERATION_CREATE = "kmip-operation-create",
  KMIP_OPERATION_GET = "kmip-operation-get",
  KMIP_OPERATION_DESTROY = "kmip-operation-destroy",
  KMIP_OPERATION_GET_ATTRIBUTES = "kmip-operation-get-attributes",
  KMIP_OPERATION_ACTIVATE = "kmip-operation-activate",
  KMIP_OPERATION_REVOKE = "kmip-operation-revoke",
  KMIP_OPERATION_LOCATE = "kmip-operation-locate",
  KMIP_OPERATION_REGISTER = "kmip-operation-register",
  SECRET_APPROVAL_REQUEST_REVIEW = "secret-approval-request-review",
  GET_SECRET_ROTATIONS = "get-secret-rotations",
  GET_SECRET_ROTATION = "get-secret-rotation",
  GET_SECRET_ROTATION_GENERATED_CREDENTIALS = "get-secret-rotation-generated-credentials",
  CREATE_SECRET_ROTATION = "create-secret-rotation",
  UPDATE_SECRET_ROTATION = "update-secret-rotation",
  DELETE_SECRET_ROTATION = "delete-secret-rotation",
  SECRET_ROTATION_ROTATE_SECRETS = "secret-rotation-rotate-secrets",

  GET_PROJECT_SLACK_CONFIG = "get-project-slack-config",
  UPDATE_PROJECT_SLACK_CONFIG = "update-project-slack-config",

  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_CREATE = "microsoft-teams-workflow-integration-create",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_DELETE = "microsoft-teams-workflow-integration-delete",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_UPDATE = "microsoft-teams-workflow-integration-update",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_CHECK_INSTALLATION_STATUS = "microsoft-teams-workflow-integration-check-installation-status",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_GET_TEAMS = "microsoft-teams-workflow-integration-get-teams",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_GET = "microsoft-teams-workflow-integration-get",
  MICROSOFT_TEAMS_WORKFLOW_INTEGRATION_LIST = "microsoft-teams-workflow-integration-list",

  SECRET_SCANNING_DATA_SOURCE_LIST = "secret-scanning-data-source-list",
  SECRET_SCANNING_DATA_SOURCE_CREATE = "secret-scanning-data-source-create",
  SECRET_SCANNING_DATA_SOURCE_UPDATE = "secret-scanning-data-source-update",
  SECRET_SCANNING_DATA_SOURCE_DELETE = "secret-scanning-data-source-delete",
  SECRET_SCANNING_DATA_SOURCE_GET = "secret-scanning-data-source-get",
  SECRET_SCANNING_DATA_SOURCE_TRIGGER_SCAN = "secret-scanning-data-source-trigger-scan",
  SECRET_SCANNING_DATA_SOURCE_SCAN = "secret-scanning-data-source-scan",
  SECRET_SCANNING_RESOURCE_LIST = "secret-scanning-resource-list",
  SECRET_SCANNING_SCAN_LIST = "secret-scanning-scan-list",
  SECRET_SCANNING_FINDING_LIST = "secret-scanning-finding-list",
  SECRET_SCANNING_FINDING_UPDATE = "secret-scanning-finding-update",
  SECRET_SCANNING_CONFIG_GET = "secret-scanning-config-get",
  SECRET_SCANNING_CONFIG_UPDATE = "secret-scanning-config-update",

  CREATE_PKI_SUBSCRIBER = "create-pki-subscriber",
  UPDATE_PKI_SUBSCRIBER = "update-pki-subscriber",
  DELETE_PKI_SUBSCRIBER = "delete-pki-subscriber",
  GET_PKI_SUBSCRIBER = "get-pki-subscriber",
  ISSUE_PKI_SUBSCRIBER_CERT = "issue-pki-subscriber-cert",
  SIGN_PKI_SUBSCRIBER_CERT = "sign-pki-subscriber-cert",
  AUTOMATED_RENEW_SUBSCRIBER_CERT = "automated-renew-subscriber-cert",
  LIST_PKI_SUBSCRIBER_CERTS = "list-pki-subscriber-certs",
  UPDATE_ORG = "update-org",

  CREATE_PROJECT = "create-project",
  UPDATE_PROJECT = "update-project",
  DELETE_PROJECT = "delete-project"
}
