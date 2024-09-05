function showPMInterface() {
    document.querySelector('.profiles').classList.add('hidden');
    document.querySelector('.pm-interface').classList.remove('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Interface Chantier";
    document.querySelector('.title').style.color = 'black';
}

function showProfiles() {
    document.querySelector('.profiles').classList.remove('hidden');
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Nex&You";
    document.querySelector('.title').style.color = 'red';
}

function showCreateCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.remove('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector()
    document.querySelector('.title').textContent = "Créer un Chantier";
    document.querySelector('.title').style.color = 'green';
}

function showTrackCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.remove('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Suivi de Chantier";
    document.querySelector('.title').style.color = 'orange';
}

function showHistoryCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.remove('hidden');
    document.querySelector('.title').textContent = "Historique de Chantier";
    document.querySelector('.title').style.color = 'gray';
}
