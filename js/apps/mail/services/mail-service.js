import utils from '../../../utils.js'

export default {
    createMail,
    getMails,
    mailStar
}

var gMails = [];

function getMails() {
    return Promise.resolve(gMails);
}

function mailStar(mailId) {
    let mail = getMailById(mailId);
    mail.isStar = !mail.isStar;
    return Promise.resolve();
}

function getMailById(mailId) {
    return gMails.find(mail => mail.id === mailId);
}

function createMail(from, subject, body) {
    let mail = {
        id: utils.makeid(),
        from:'me',
        subject,
        body,
        isRead: false,
        sentAt: Date.now(),
        inTrash: false,
        isStar: false
    }
    gMails.push(mail)
}

createMail('Me', 'Hello', 'This is a body');
createMail('Yoni', 'Yo', 'are you for real?');
gMails.push(
    {
        id: utils.makeid(),
        from:'Amo',
        subject:'See this!',
        body:'You gotta see this',
        isRead: true,
        sentAt: Date.now(),
        inTrash: false,
        isStar: false
    }
)