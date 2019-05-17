export abstract class BaseService {

    protected isEmptyValue(value: string) {
        if (value === undefined || value === null || value.split(' ').join('') === '') {
            return true;
        }
        return false;
    }

    protected isEmptyObject(value: any) {
        if (value === undefined || value === null) {
            return true;
        }
        return false;
    }

    protected isEmptyArray(value: any[]) {
        if (value === undefined || value === null || value.length <= 0) {
            return true;
        }
        return false;
    }

}