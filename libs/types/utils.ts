export enum EActionHistoryLogType {
  EVENT = 'EVENT',
}

export enum EActionHistoryActionType {
  CREATE = 'created',
  DELETE = 'deleted',
}

export enum EImgTransformationType {
  SMALL,
  MEDIUM,
  LARGE,
  AVATAR,
}

export enum EDrawerMode {
  VIEW = 'VIEW',
  CHANGE = 'CHANGE',
  ADD = 'ADD',
  EDIT = 'EDIT',
}

export enum EImgStatus {
  ALL = 'ALL',
  APPROVED = 'APPROVED',
  UNAPPROVED = 'UNAPPROVED',
}

export enum EUploadStatus {
  UPLOADING = 'uploading',
  UPLOADED = 'uploaded',
  REMOVED = 'removed',
  ERROR = 'error',
}

export enum ETaskPriorities {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  NONE = 'High',
}

export enum ETaskStatuses {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}
export enum EPortals {
  ADMIN = 'ADMIN',
  PARTNER = 'PARTNER',
  USER = 'USER',
}

export enum ENetworkRequestActionType {
  ADDED = 'added',
  REMOVED = 'removed',
  DELETED = 'deleted',
  UPDATED = 'updated',
}
export enum ECategoryType {
  VENDOR = 'VENDOR',
  CONSULTATION_TOPIC = 'CONSULTATION_TOPIC',
  DESIGN_BOARD = 'DESIGN_BOARD',
  PLANNER = 'PLANNER',
  BUDGET_BREAKDOWN = 'BUDGET_BREAKDOWN',
  DOCUMENT = 'DOCUMENT',
}

export const EProgressColors = {
  COMPLETED: 'success',
  IN_PROGRESS: 'veryLightBlue',
  PLANNED: 'electricBlue',
}

export const EProgressBackgroundColors = {
  COMPLETED: 'successLight',
  IN_PROGRESS: 'veryLightBlueDark',
  PLANNED: 'electricBlueLight',
}

export enum EAttachmentLimit {
  MULTIPLE = 'MULTIPLE',
  SINGLE = 'SINGLE',
}
