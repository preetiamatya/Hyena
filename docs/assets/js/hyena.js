
/*var app = angular.module('hyApp', []);
app.controller('hyCtrl', function($scope) {
    $scope.listquery = '';
	console.log("Setting names");
    $scope.list = ["Abhinav", "A M Publishers", "Academe Research Journals", "Academia Publishing", "Academic and Business Research Institute", "Academic Journals", "Academic Journals, Inc.","Academic Journals and Research ACJAR"];
});*/
// Add 'inputDropdown' as a dependency when creating angular app
var demoApp = angular.module('inputDropdownDemo', ['inputDropdown']);

demoApp.controller('InputDropdownController', [
    '$scope',
    '$q',
    function($scope, $q) {
        var self = this;

        self.stringMessage = '';
        self.objectMessage = '';

        self.publisherString = null; // Holds the selected in demoFormStrings, set with attribute 'selected-item'
        self.countryObject = null; // Holds the selected in demoFormObjects, set with attribute 'selected-item'

        // Pass strings to the dropdown for simple usage

        self.defaultDropdownStrings = [
            'Abhinav',
            'A M Publishers',
            'Academe Research Journals' ,
            'Academia Publishing' ,
            'Academic and Business Research Institute',
            'Academic Journals' ,
            'Academic Journals and Research ACJAR' ,
            'Academic Journals, Inc.' ,
            'Academic Journals Online (AJO)' ,
            'Academic Publications, Ltd.',
            'Academic Research Publishing Agency' ,
            'Academic Sciences' ,
            'Academy &amp; Industry Research Collaboration Center (AIRCC)' ,
            'Academy Journals' ,
            'Academy of Knowledge Process' ,
            'Academy of Science and Engineering (ASE)' ,
            'Academy Publish',
            'Access International Journals' ,
            'Ada Lovelace Publications' ,
            'Advanced Research Journals' ,
            'Advancements and Development in Technology International(Aditi) ',
            'AENSI' ,
            'Akademik Plus Publication' ,
            'American Academic &amp; Scholarly Research Center (AASRC)' ,
            'American V-King Scientific Publishing',
            'ANSINetwork' ,
            'Antarctic Journals' ,
            'Apex Journals' ,
            'ARPN Journals' ,
            'Ashdin Publishing' ,
            'Asian Economic and Social Society (AESS)' ,
            'Asian Research Consortium' ,
            'Australian International Academic Centre Pty. Ltd.' ,
            'Baishideng Publishing Group' ,
            'Basic Research Journals' ,
            'Bentham Open' ,
            'Better Advances Press' ,
            'BioInfo Publications' ,
            'BioIT international Journals ' ,
            'BioMedSciDirect Publications',
            'Bioscience Research &amp; Educational Institute [Link dead as of 2012-11-14]' ,
            'Bonfring',
            'British Association of Academic Research (BAAR)' ,
            'British Journal',
            'Business Journalz (BJ)',
            'Canadian Center of Science and Education' ,
            'Center for the Development and Dissemination of Knowledge' ,
            'Center for Enhancing Knowledge (CEK), UK',
            'Center for Promoting Ideas' ,
            'Centre For Info Bio Technology (CIBTech)',

            'Centre of Promoting Research Excellence (CPRE)',
            'Cloud Journals' ,
            'The Clute Institute' ,
            'Computer Science Journals' ,
            'CONFAB Journals' ,
            'Cosmic Journals' ,
            'CSCanada' ,
            'Discovery Publishing Group ' ,
            'David Publishing' ,
            'Deccan Pharma Journals' ,
            'E-International Scientific Research Journal Consortium(E-ISRJC)',
            'e-journals' ,
            'e3Journals' ,
            'eCanadian Journals' ,
            'Econjournals' ,
            'EISRJC Journals(E-International Scientific Research Journal Consortium)',
            'eLearning Institute' ,
            'Elewa Bio Sciences' ,
            'eJournals of Academic Research & Reviews',
            'Electronic Center for International Scientific Information',
            'Elmer Press' ,
            'Engineering and Technology Publishing' ,
            'Erudite Journals Limited' ,
            'EuroJournals' ,
            'Far East Research Centre' ,
            'Ficus Publishers' ,
            'Global Advanced Research Journals' ,
            'Global Journals, Inc. (US)',
            'Global Research Journals' ,
            'Global Research Online' ,
            'Global Research Publishing (GRP)',
            'GlobalOpenJournals.org' ,
            'GlobalSkope Publishing Society' ,
            'Green Global Foundation(GGF)',
            'Greener Journals' ,
            'Growing Science Publishing Company' ,
            'Herald International Research Journals',
            'Herbert Open Access Journals',
            'Hikari Ltd.' ,
            'Human and Sciences Publications(HumanPub)',
            'Human Resource Management Academic Research Society(HRMARS)',
            'IBIMA Publishing',
            'Indian Society for Education and Environment' ,
            'Indus Foundation for Education, Research & Social Welfare' ,
            'Innovative Space of Scientific Research(ISSR Journals)',
            'INREWI' ,
            'Insight Knowledge' ,
            'Institute of Advanced Scientific Research' ,
            'Institute of Electronic & Information Technology' ,
            'Institute of Language and Communication Studies' ,
            'InTech Open Access Publisher – Mirror site',
            'Integrated Publishing Association' ,
            'Intellectual Archive' ,
            'Intercontinental Electronic Journals' ,
            'International Academic Journals' ,
            'International Academy of Business & Economics' ,
            'International Academy of Science, Engineering and Technology (International ASET)',
            'The International Academy, Research and Industry Association(IARIA)',
            'International Association for Engineering & Technology',
            'International Association for Engineering and Management Education(IAEME)',
            'International Association of Journals & Conferences(IAJC)',
            'International Conference on Computer Science and Engineering',
            'International Digital Organization for Scientific Information(IDOSI)',
            'International House for Academic Scientific Research' ,
            'International Institute for Science, Technology and Education(IISTE)',
            'International Institute of Informatics and Systemics' ,
            'The International Journal Research Publications' ,
            'International Journals of Engineering & Sciences',
            'International Journals of Multidisciplinary Research Academy',
            'International Journals of Scientific Research(IJSR)',
            'International Network for Applied Sciences and Technology' ,
            'International Network for Natural Sciences(INNSPUB)',
            'International Research Journal(Rajasthan, India)',
            'International Research Journals (Lagos, Nigeria)',
            'International Research Journals(Accra, Ghana)',
            'International Scholars Journals',
            'International Science Congress Association',
            'International Scientific Engineering and Research Publications',
            'International Scientific Publications',
            'International Society of Universal Research in Sciences (EyeSource)' ,
            'Internet Medical Publishing',
            'Internet Scientific Publications' ,
            'Interscience Journals' ,
            'Interscience Open Access Journals' ,
            'ISISnet',
            'Ivy Union Publishing',
            'Jyoti Academic Press' ,
            'KEJA Publications',
            'Knowledgebase Publishers',
            'Knowledgia Scientific (formerly Knowledgia Review)',
            'Lifescience Global' ,
            'Macrothink Institute' ,
            'Marsland Press' ,
            'Maryland Institute of Research',
            'Maxwell Scientific Organization' ,
            'MASAUM Network' ,
            'Medical Science Journals[Link dead as of 2012-11-14]' ,
            'Medwell Journals' ,
            'Mehta Press' ,
            'Merit Research Journals',
            'MNK Publication' ,
            'Modern Scientific Press',
            'Muhammadon Centre for Research and Development (MCRD)',
            'Narain Publishers Pvt. Ltd (NPPL)' ,
            'National Social Science Association (NSSA)' ,
            'Net Journals',
            'NobleResearch Publisher' ,
            'Noto-are',
            'OA Publishing London',
            'OMICS Publishing Group' ,
            'Online Research Journals' ,
            'OpenAccessPub',
            'Open Research and Science Library (ORSlib) ' ,
            'Open Research Society',
            'PBS Journals' ,
            'Pelagia Research Library',
            'Pharmaceutical Research Foundation',
            'Pharmacognosy Network Worldwide' ,
            'PharmaInfo',
            'PharmaInterScience Publishers',
            'Photon Foundation' ,
            'Praise Worthy Prize' ,
            'Prime Journals' ,
            'Research Publisher' ,
            'RedFame Publishing' ,
            'RG Education Society' ,
            'Ross Science Publishers' ,
            'Sacha International Academic Journals',
            'SAVAP International' ,
            'Scholar Journals',
            'Scholar People',
            'Scholar Science Journals',
            'Scholarlink Resource Centre Limited' ,
            'Scholarly Journals International',
            'Scholars Research Library' ,
            'Sciedu Press' ,
            'Science & Knowledge Publishing Corporation Limited',
            'Science Academy Publisher' ,
            'Science Alert' ,
            'Science and Education Publishing' ,
            'Science and Engineering Publishing Company' ,
            'Science Education Foundation' ,
            'Science Instinct Publications' ,
            'Science Journal Publication' ,
            'Science Park Journals' ,
            'Science Publications' ,
            'Science Publishing Group' ,
            'Science Record Journals' ,
            'Science Target' ,
            'ScienceDomain International',
            'ScienceHuβ' ,
            'Sciencepress Ltd.',
            'Scientific & Academic Publishing',
            'Scientific Journals',
            'Scientific Journals International',
            'Scientific Research Publishing' ,
            'SciTechnol',
            'ScottishGroup Education and Testing Services' ,
            'Segment Journals',
            'Signpost e Journals' ,
            'Silicon Valley Publishers' ,
            'SJournals' ,
            'Sky Journals',
            'Society for Science and Nature' ,
            'Society of Engineering Science and Technology (SEST India)' ,
            'Sphinx Knowledge House',
            'Southern Cross Publishing Group',
            'Suryansh Publications' ,
            'Swiss Journals' ,
            'Technical Journals Online' ,
            'Technopark Publications',
            'Textroad Journals' ,
            'Thavan E ACT International Journals' ,
            'Today Science',
            'Trade Science, Inc' ,
            'Trans Stellar (Transstellar) ' ,
            'Transnational Research Journals (formerly Universal Research Journals)',
            'Universal Research Publications' ,
            'Valleys International' ,
            'VBRI Press' ,
            'Whites Science Journals' ,
            'Victorquest Publications' ,
            'Wilolud Journals' ,
            'Wireilla Scientific Publications' ,
            'World Academic Publishing' ,
            'World Academy of Research and Publication' ,
            'World Academy of Science, Engineering and Technology (WASET) ',
            'World Scholars' ,
            'World Science Publisher' ,
            'World Scientific and Engineering Academy and Society (WSEAS)' ,
            'Wudpecker Research Journals' ,
            'Wyno Academic Journals'


        ];

        // Filter method is passed with attribute 'filter-list-method="method(userInput)"'.
        // Called on the onchange event from the input field. Should return a promise resolving with an array of items to show in the dropdown.
        // If no filter method is passed to the the directive, the default dropdown will show constantly.
        self.filterStringList = function(userInput) {
            var filter = $q.defer();
            var normalisedInput = userInput.toLowerCase();

            var filteredArray = self.defaultDropdownStrings.filter(function(country) {
                return country.toLowerCase().indexOf(normalisedInput) === 0;
            });

            filter.resolve(filteredArray);
            return filter.promise;
        };

        self.filterObjectList = function(userInput) {
            var filter = $q.defer();
            var normalisedInput = userInput.toLowerCase();

            var filteredArray = self.defaultDropdownObjects.filter(function(country) {
                var matchCountryName = country.name.toLowerCase().indexOf(normalisedInput) === 0;
                var matchCountryCode = country.code.toString().indexOf(normalisedInput) === 0;
                return matchCountryName || matchCountryCode;
            });

            filter.resolve(filteredArray);
            return filter.promise;
        };


        // Called when user selected an item from dropdown. Passed with attribute 'item-selected-method="method(item)"'.
        self.itemStringSelected = function(item) {
            console.log('Handle item string selected in controller:', item);
           // self.stringMessage = 'String item selected: ' + item;
        };

        self.itemObjectSelected = function(item) {
            console.log('Handle item object selected in controller:', item);
            self.objectMessage = 'Object item selected: ' + item;
        };


        self.submitFormStrings = function() {
            if ($scope.demoFormStrings.$valid) {
                console.log('Submit form STRINGS with country:', self.publisherString);
                self.stringMessage = 'The Publisher: ' + self.publisherString+ " is a Predatory Publisher";
            }
        };

        self.submitFormObjects = function() {
            if ($scope.demoFormObjects.$valid) {
                console.log('Submit form OBJECTS with country:', self.countryObject);
                self.objectMessage = 'Submit form OBJECT with country: ' + self.countryObject;
            }
        };

    }
]);

// Country object used in dropdown
var Country = function(id, countryName, countryCode) {
    this.id = id;
    this.name = countryName;
    this.code = countryCode;
    this.readableName = '(+' + countryCode + ') ' + countryName;
};

// toString method used to log information about object for demo purposes
Country.prototype.toString = function() {
    return '{id: ' + this.id + ', readableName: ' + this.readableName + ', name: ' + this.name + ', code: ' + this.code + '}';
}



