import fs from 'fs';
import { csvParse } from 'd3-dsv';
import type { EndpointOutput } from '@sveltejs/kit';

export interface LinkType {
  timestamp?: string;
  url: string;
  title: string;
  description?: string;
}

export async function get(): Promise<EndpointOutput> {
  const csvData = await fs.promises.readFile('../../data/links.csv', 'utf8');
  const links: LinkType[] = csvParse(csvData);
  return {
    body: JSON.stringify(links),
  };
}
