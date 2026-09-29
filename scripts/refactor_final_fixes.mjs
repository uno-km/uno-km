import fs from 'fs';

let content = fs.readFileSync('api/seed_posts.js', 'utf8');

content = content.replace(/강제 사살\(SIGKILL\)을 방지하기 위해/g, '강제 종료(SIGKILL)를 방지하기 위해');
content = content.replace(/강제 사살\(Kill\)합니다/g, '즉각 강제 종료(Kill)합니다');
content = content.replace(/강제 사살!<br\/>프로세스 메모리 해제/g, '강제 종료(SIGKILL)<br/>프로세스 메모리 회수');
content = content.replace(/프로세스를 강제 사살\(`SIGQUIT`\)하여/g, '프로세스를 강제 종료(`SIGQUIT`)하여');
content = content.replace(/프로세스 트리가 강제 사살되지 않음을/g, '프로세스 트리가 비정상 강제 종료되지 않음을');

fs.writeFileSync('api/seed_posts.js', content, 'utf8');
console.log('Successfully replaced final 5 instances of 강제 사살.');
