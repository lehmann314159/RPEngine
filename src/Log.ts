export type LogType = {
  campaign: string;
  session: string;
  character: string;
  timestamp: Date;
  tags: Array<string>;
  description: string;
};

export type LogSearchType = {
  campaign?: string;
  session?: string;
  character?: string;
  startTimestamp?: Date;
  endTimestamp?: Date;
  tags?: Array<string>;
};

export class LogItem {
  campaign: string;
  session: string;
  character: string;
  timestamp: Date;
  tags: Array<string>;
  description: string;

  constructor(entry: LogType) {
    this.campaign = entry.campaign;
    this.session = entry.session;
    this.character = entry.character;
    this.timestamp = entry.timestamp;
    this.tags = entry.tags;
    this.description = entry.description;
  }
}

export interface LogManagerInterface {
  search(criteria: LogSearchType): Array<LogItem>;
  add(entry: LogType): void;
}

export class SillyLogItem extends LogItem {}

export class SillyLogManager implements LogManagerInterface {
  logbook: Array<SillyLogItem> = [];

  search(criteria: LogSearchType): Array<SillyLogItem> {
    return this.logbook;
  }

  add(entry: LogType): void {
    this.logbook.push(entry);
  }
}
