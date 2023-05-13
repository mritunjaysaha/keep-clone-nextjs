import type { Label } from '@/types/labels/Label';
import type { ResponseType } from '@/types/ResponseType';

export type LabelList = { labels: Label[] };

export type LabelResponse = ResponseType & LabelList;
