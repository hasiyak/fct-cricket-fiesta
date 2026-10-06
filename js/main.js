// Load Header and Footer
// load the header
fetch('components/header.html')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById('header').innerHTML = data;

        // Get the current path
        const currentpath = window.location.pathname;

        let activeNavId = 'nav-live'; // Default to 'live' if no match

        if (currentpath.includes('fixtures.html')) {
            activeNavId = 'nav-fixtures';
        } else if (currentpath.includes('points-table.html')) {
            activeNavId = 'nav-points';
        } else if (currentpath.includes('teams.html')) {
            activeNavId = 'nav-teams';
        }

        const activeNavItem = document.getElementById(activeNavId);
        if (activeNavItem) {
            activeNavItem.className = "flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
        }
    });

// load the footer
fetch('components/footer.html')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        document.getElementById('footer').innerHTML = data;
    });


