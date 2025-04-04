function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('✅ 로그인 완료');
      resolve({ id: 1, name: '유저' });
    }, 1000);
  });
}

function fetchUserData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`📦 유저 데이터 가져오기 (ID: ${userId})`);
      resolve({ settingsId: 42 });
    }, 1000);
  });
}

function getSettings(settingsId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`⚙️ 세팅 가져오기 (ID: ${settingsId})`);
      resolve({ role: 'admin' });
    }, 1000);
  });
}

function getPermissions(userId, role) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🔐 권한 가져오기 (UserID: ${userId}, Role: ${role})`);
      resolve(['read', 'write', 'delete']);
    }, 1000);
  });
}

// promise 체이닝
login()
  .then(
    (user) => fetchUserData(user.id).then((data) => ({ user, data })) // 1. 변수 관련 - user와 data 모두 유지
  )
  .then(({ user, data }) => {
    // 2. 조건문 관련 - Promise에서는 조건문과 비동기 호출이 섞이며, 다시 .then()으로 중첩
    if (data.role !== 'admin') {
      throw new Error('접근 권한 없음');
    }
    return getSettings(data.settingsId).then((settings) => ({
      user,
      data,
      settings,
    })); // settings 추가
  })
  .then(({ user, data, settings }) => {
    return sendLog({ success: true, settings }).then(() => {
      console.log('✅ 관리자 설정 완료:', settings);
    });
  })
  .catch((err) => {
    return sendLog({ success: false, error: err.message }).then(() => {
      console.error('🚨 에러 처리:', err.message);
    });
  });

// + ) 추가 해당하는 함수들 @@@()는 Promise를 반환한다. 이후 로그를 출력하고 싶기 때문에 계속해서 .then() 을 연결해서 작업해주어야 순서를 보장시켜줄 수 있다. 근데 async / await 쓰면 필요없지롱 ~

// async / await
async function mainFlow() {
  try {
    const user = await login();
    const data = await fetchUserData(user.id); // 1. 변수 관련 - 이전 값을 계속 유지해야 할 때는 async/await가 훨씬 간결

    // 2. 조건문 관련 - Promise에서는 조건문과 비동기 호출이 섞이며, 다시 .then()으로 중첩
    // async/await는 동기 흐름 그대로 if → await 구조가 자연스러움
    if (data.role !== 'admin') {
      throw new Error('접근 권한 없음');
    }
    const settings = await getSettings(data.settingsId);

    await sendLog({ success: true, settings });
    console.log('✅ 관리자 설정 완료:', settings);
  } catch (err) {
    await sendLog({ success: false, error: err.message });
    console.error('🚨 에러 처리:', err.message);
  }
}

mainFlow();
