import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
    saveChild<T>(parentKey: string, childKey: string, result: T) {
        let parent = this.getItem(parentKey) || {};
        parent[childKey] = result;
        localStorage.setItem(parentKey, JSON.stringify(parent));
    }

    getChild<T>(parentKey: string, childKey: string): T | null {
        const parent = this.getItem(parentKey);
        if (parent) {
            return parent[childKey] || null;
        }
        return null;
    }

    private getItem(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}
