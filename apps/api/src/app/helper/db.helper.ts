import * as mongoose from 'mongoose';

export class DBHelper {
    static init(): void {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //    @ts-ignore
        mongoose.connect('mongodb://localhost/todoDB', {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log('Connection to mongoDB successful'))
            .catch((e: Error) => console.log(`Could not connect to mongo.\n\n${e}`));
    }
}
