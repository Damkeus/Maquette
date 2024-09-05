// Afficher l'interface PM et cacher la page d'accueil
function showPMInterface() {
    document.querySelector('.profiles').classList.add('hidden');
    document.querySelector('.pm-interface').classList.remove('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Interface Chantier";
    document.querySelector('.title').style.color = 'black';
}

// Retourner à la page d'accueil
function showProfiles() {
    document.querySelector('.profiles').classList.remove('hidden');
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Nex&You";
    document.querySelector('.title').style.color = 'red';
}

// Afficher la section "Créer un chantier"
function showCreateCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.remove('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Créer un Chantier";
    document.querySelector('.title').style.color = 'green';
}

// Afficher la section "Suivi de chantier"
function showTrackCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.remove('hidden');
    document.querySelector('.history-ch').classList.add('hidden');
    document.querySelector('.title').textContent = "Suivi de Chantier";
    document.querySelector('.title').style.color = 'orange';
}

// Afficher la section "Historique de chantier"
function showHistoryCh() {
    document.querySelector('.pm-interface').classList.add('hidden');
    document.querySelector('.create-ch').classList.add('hidden');
    document.querySelector('.track-ch').classList.add('hidden');
    document.querySelector('.history-ch').classList.remove('hidden');
    document.querySelector('.title').textContent = "Historique de Chantier";
    document.querySelector('.title').style.color = 'gray';
}
