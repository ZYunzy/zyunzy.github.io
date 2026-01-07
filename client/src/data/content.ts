export const content = {
  about: {
    paragraphs: [
      "I'm Yun Zhuang, a researcher passionate about sustainable urban systems. I focus on interdisciplinary approaches to address complex urban challenges through system science, data analysis, and computational modeling. My work explores the interactions between human, infrastructure, and environmental systems to inform resilient and adaptive engineer strategies. My techinical interests are network science, dynamic modeling, and urban informatics.",
    ],
    infoBoxes: [
      {
        title: "Education",
        color: "#E0D6FF",
        items: [
          "B.Eng in Urban Planning",
          "M.Eng in Urban Planning",
          "M.Sc in Geomatics (GIS)",
          "B.Sc in Data Science & AI (ongoing)",
        ],
      },
      {
        title: "Skills",
        color: "#C1F0DB",
        items: [
          "Data Science & AI",
          "Computational Modeling",
          "Programming (Python, R, Java, C++, JavaScript)",
        ],
      },
      {
        title: "Interests",
        color: "#FFD6E0",
        items: [
          "Urban Systems",
          "Complex Networks",
          "Infrastructure and Transportation",
          "Sustainability and Resilience",
        ],
      },
      {
        title: "Languages",
        color: "#E0D6FF",
        items: [
          "Mandarin",
          "English",
          "Cantonese",
          "Teochew",
          "Japanese",
        ],
      },
    ],
  },
  research: {
    projects: [
      {
        title: "My Research Project",
        description:
          "Research project focused on computaional modelling and spatial statistics to study the human-infrastructure-environment interactions within urban systems.",
        image:
          "https://images.unsplash.com/photo-1581092921461-7717a5f1ecf9?auto=format&fit=crop&w=600&h=300",
        link: "#",
      },
    ],
  },
  projects: [
    {
      id: "informal-settlements",
      title: "Urban Informal Settlements in the Global South",
      description:
        "Informal settlements (IS) present a complex system of social, economic, and ecological interactions that arise spontaneously and unplanned in urban areas and require a forward-looking and comprehensive approach to address their socio-ecological interactions. Moreover, an IS is conceptually considered a sub-system within a broader urban system, interacting with and influenced by internal and external factors.",
      image:
        "https://i0.wp.com/www.mediapolisjournal.com/wp-content/uploads/2019/11/Mumbai.png?resize=1050%2C588&ssl=1",
      link: "#",
      gradient: "from-[#C1F0DB] via-[#FFD6E0] to-[#E0D6FF]",
      tags: [
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
        { name: "Equality and Wellbeing", color: "#ECC2ECFF" },
        { name: "Regional Studies", color: "#B0E0FF" },
        { name: "Urban Systems", color: "#FFE4B5" },
      ],
      content: "Urban informal settlements, often referred to as slums or shantytowns, are home to over one billion people in the Global South, representing one of the most pressing urban challenges of our time. This research project examines the complex dynamics of informal settlements through a multidisciplinary lens, combining spatial analysis, social science, and sustainable development frameworks. By leveraging GIS technologies, remote sensing data, and community-based research methods, we investigate the spatial patterns, infrastructure deficits, and socio-economic characteristics of informal settlements across cities in Africa, Asia, and Latin America. These settlements face heightened environmental risks, including exposure to flooding, air and water pollution, inadequate waste management, and urban heat islands, which disproportionately affect vulnerable populations. The project aims to identify pathways toward inclusive urbanization that respect the agency of informal settlement residents while addressing critical needs in housing, sanitation, transportation, and access to services. Through comparative analysis and stakeholder engagement, we develop evidence-based recommendations for policy interventions that promote equitable urban development, enhance resilience to climate risks, and advance the Sustainable Development Goals. This research contributes to global efforts in understanding and addressing urban poverty, inequality, and the right to adequate housing in rapidly urbanizing regions of the Global South.",
      sections: [
        {
          type: "text-gallery",
          title: "From buildings to communities: Identifying urban informal settlements through spatial network-based approaches",
          text: "Traditional approaches to detecting urban informal settlements mainly focus on remote sensing image interpretation and often neglect explicit morphological traits. Ambiguous boundaries and diverse characteristics also significantly increase annotation complexity and training costs. Therefore, I proposed a novel building-centric framework for identifying urban informal settlements based on open building dataset. In the framework, I developed a self-supervised learning model based on GraphSAGE architecture with Loss function that simulates community detection for large graph partition in generating building groups. By embedding spatial information directly into the model, it facilitates efficient spatial node clustering in large graphs. The methods can quickly identify urban informal settlements in the Global South without large volume of pre-labeled data and high computational resources.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767717181/uis_morphology_oo0tus.png", caption: "Urban Settlements Morphology" },
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767716747/community_s7gonk.png", caption: "Community Detection" }   
          ]
        },
        {
          type: "text-gallery",
          title: "Environmental risk assessment of urban informal settlement using GNN-based spatial downscaling",
          text: "By mapping the dynamic evolution of informal settlements across 100+ countries in Global South, we try to interpret multi-source remote sensing imagery to assess their environmental risks, including water and air pollution, localized overheating caused by high density, and increased flood vulnerability. To address the challenge of scale mismatch between environmental data and informal settlement extents, we develope a novel graph neural network (GNN) based downscaling model that integrates spatial dependencies and contextual information to enhance the resolution of environmental datasets at a hyper-local scale. Transcending the limitations of traditional CNNs that treat spatial data as regular grids, our approach models settlements as irregular graph structures composed of superpixels or building clusters. By leveraging the message-passing mechanism of Graph Attention Networks (GATs), we deeply integrate coarse-resolution environmental proxies (e.g., Sentinel-5P, MODIS) with high-resolution morphological features. Furthermore, we incorporate physics-informed constraints—such as energy conservation—directly into the loss function to suppress model 'hallucinations.' This strategy effectively mitigates the 'mixed pixel' effect inherent in traditional remote sensing, enabling precise inference of micro-climate variations, such as localized overheating and pollution hotspots. This research allows for more accurate assessment of localized environmental risks within informal settlements, providing critical insights for targeted interventions and policy-making aimed at improving living conditions and resilience in these vulnerable urban areas.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767716101/global5_tqfqzb.png", caption: "Global South" },
            // { src: "https://example.com/image2.jpg", caption: "Caption 2" }
          ]
        },
        // 其他sections...
      ]
    },
    {
      id: "mobility",
      title: "Mobility, Infrastructure, and Urban Spatial Structure",
      description:
        "Mobility behavior is closely linked to urban spatial structure and the built environment, which together shape transportation demand, infrastructure performance, and sustainability outcomes. Understanding these interactions is critical for designing resilient and low-carbon urban systems that can adapt to future uncertainties.",
      image:
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767618454/1804bf8e7e35b774ab1b9ff814e76e04_feq7en.jpg",
      link: "#",
      gradient: "from-[#FFD6E0] via-[#E0D6FF] to-[#C1F0DB]",
      tags: [
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
        { name: "Transportation and mobility", color: "#FFD6E0" },
        { name: "Resilient Infrastructure", color: "#E0D6FF" },
        { name: "Urban Systems", color: "#FFE4B5" },
      ],
      content: "This research project examines the intricate relationships between individual mobility behavior, urban street environments, and transportation infrastructure in shaping sustainable and resilient urban spatial structures. By investigating how people's travel patterns interact with the built environment, we analyze the role of emerging transportation modes—such as shared mobility, electric vehicles, and micro-mobility—in advancing transportation decarbonization and reducing urban carbon footprints. The project conceptualizes transportation infrastructure as the 'skeleton' and land use as the 'flesh' of urban systems, exploring how optimizing land use patterns, mixed-use development, transit-oriented design, and spatial connectivity can enhance the sustainability and resilience of transportation networks. Through computational modeling, spatial analysis, and scenario planning, we investigate strategies to improve infrastructure performance under various uncertainties, including climate risks, demographic shifts, and technological disruptions. This research contributes to creating low-carbon, adaptable urban systems that integrate sustainable mobility solutions with resilient spatial planning, ultimately fostering equitable access, environmental sustainability, and urban livability in the face of future challenges.",
      sections: [
        {
          type: "text-gallery",
          title: "Adaptive Navigation for Cycling Route Recommendation: Integrating Detour Behavior and Environmental Dynamics",
          text: "By integrating multi-source data, this study presents a novel framework that leverages the VLM model to assess the cycling suitability of road segments. MaxEnt IRL is also used to quantify cyclists’ segment-level preferences based on 5 dimension weighted reward function. By imitating the decision-making process behind cyclists’ detour behaviors, this study introduces a dual-agent based simulation framework for adaptive cycling route recommendation in complex urban environments. The system employs two interacting agents: one that responds to personalized preferences, and a supervisory agent that optimizes for the globally recommended best route under uncertain traffic and environmental conditions.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767773696/project1_giuejd.png", caption: "Research Framework" },
            // { src: "https://example.com/image2.jpg", caption: "Caption 2" }
          ]
        },
        {
          type: "text-gallery",
          title: "A Hybrid Simulation Framework for Modeling the Carbon Mitigation of Bike-Public Transition",
          text: "Since the overall travel demand is relatively fixed, different transport modes inevitably exhibit both competitive and complementary relationships. By exploring the modal shift impact of bike usage on traffic emissions, I develop a hybrid simulation framework for assessing carbon mitigation potential. The core idea is to rebalance bike-sharing so that it supplements public transit rather than competing with it, thereby reducing reliance on private cars and taxis. The modeling framework employs E-fence planning and Agent-Based Fleet Sizing as two key measures to complete the bike-sharing supply chain and encourage modal shifts from private transport toward bike–transit integration. In this study, agents represent not only traffic users switching between modes but also the placement of bikes and the operation of E-fences, making the model both space-based and transit-oriented. Furthermore, multi-agent reinforcement learning is trained to optimize strategies for multimodal systems until system-wide emissions and modal shares converge toward critical turning points.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767773697/project2_ugzowq.png", caption: "Research Framework" },
            // { src: "https://example.com/image2.jpg", caption: "Caption 2" }
          ]
        },
        {
          type: "text-gallery",
          title: "Modeling the Optimization of Urban Spatial Structures",
          text: "By abstracting the urban space as spatial networked systems with top-down system and bottom-up agent approach, I try to model the urban structure for daily travel under two scenarios: carbon emission optimization and disaster resilience. These models are implemented within Multi-Agent Systems, where agents represent transport network components, such as transit lines or infrastructure segments, and their interactions reflect user flows across the network. Specifically, graph neural network combined with reinforcement learning is to abstract and optimize these interconnected transport systems under two complementary simulation scenarios. The deterministic scenario identifies critical turning points, i.e. structural adjustments or strategic interventions that can shift the trajectory of commuting efficiency and carbon reduction. The second scenario extends this analysis to uncertain contexts, capturing risks from external shocks such as flooding in inundation-prone areas or other disruptive events. This integrated framework enables the systematic exploration of both planned interventions and unanticipated disruptions, and supports adaptive policy-making for resilient and low-carbon urban mobility futures.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767773697/project3_jhctdj.png", caption: "Research Framework" },
            // { src: "https://example.com/image2.jpg", caption: "Caption 2" }
          ]
        },
        // 其他sections...
      ]
    },
    {
      id: "green-blue-infrastructure",
      title: "Green-Blue Infrastructure in Sustainable and Resilient Cities",
      description:
        "Urban green-blue infrastructure (GBI) offers a multifaceted approach to enhancing urban sustainability and resilience by leveraging natural systems to provide ecosystem services such as carbon sequestration, heat mitigation, and water management.",
      image:
        "https://i.pinimg.com/1200x/4b/0d/67/4b0d67878410e508816a7114632b01b0.jpg",
      link: "#",
      gradient: "from-[#E0D6FF] via-[#C1F0DB] to-[#FFD6E0]",
      tags: [
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
        { name: "Resilient Infrastructure", color: "#E0D6FF" },
        { name: "Nature-based Solutions", color: "#C1F0DB" },
        { name: "Urban Systems", color: "#FFE4B5" },
      ],
      content: "Urban green-blue infrastructure (GBI) represents a nature-based solution that integrates green spaces (parks, urban forests, green roofs) and blue elements (rivers, wetlands, retention ponds) into urban systems to address multiple sustainability challenges. This research project investigates the role of GBI in enhancing urban resilience through carbon reduction, heat mitigation, and water-sensitive urban design. By combining remote sensing technologies, climate modeling, and hydrological analysis, we quantify the cooling effects of urban vegetation and water bodies, assess their capacity for carbon sequestration, and evaluate their performance in stormwater management and flood mitigation. The project employs spatial analysis and scenario planning to identify optimal locations and configurations for GBI interventions that maximize co-benefits across environmental, social, and economic dimensions. Through case studies in rapidly urbanizing cities facing climate risks, we develop evidence-based guidelines for integrating GBI into urban planning and design processes. This research contributes to creating cooler, carbon-neutral, and water-sensitive cities that enhance quality of life while building resilience to climate change impacts such as urban heat islands, flooding, and water scarcity.",
      sections: [
        {
          type: "text-gallery",
          title: "Carbon Stock and Sequestration Estimation of Urban Greenery",
          text: "The research aims to develop carbon storage and sequestration models that estimate the current amount of carbon stored in a landscape and values the amount of sequestered carbon for large-scale, longitudinal monitoring. We conduct on-site measurements and apply allometric models to monitor carbon sequestration by urban greenery in Singapore. My responsibility is to develop a three-dimensional reconstruction model of urban trees from street-view images to extract detailed plant characteristics. Combining these characteristics with microclimate data, anthropogenic factors, and ground-truth measurements, we train a machine learning model capable of large-scale, longitudinal monitoring of carbon uptake and loss in urban greenery. A pilot study was carried out on the NUS campus.",
          images: [
            { src: "https://d32m1btok6bzqh.cloudfront.net/wp-content/uploads/2024/02/image-2.png", caption: "How to calculate CO2 sequestration" },
            { src: "https://storage.googleapis.com/jnl-up-j-bc-files/journals/1/articles/586/684017a561cbe.png", caption: "How urban green infrastructure contributes to carbon neutrality" }
          ]
        },
        {
          type: "text-gallery",
          title: "Water Environment System Optimization and Planning Technology in National New Districts",
          text: "Under extreme climatic conditions, urban flooding is largely caused by insufficient coordination between land use and water system planning, while water system planning, as a critical measure for flood mitigation, represents a fundamental and forward-looking priority in urban planning. In this project, I first extracted land use changes and the evolution of the urban water network in Guangzhou from remote sensing imagery, and quantified their significant associations with flooding using spatial econometrics. With other interdisciplinary members, we built a modeling framework to identify water-sensitive areas in the city and inferred the suitable upper and lower bounds of the water-surface ratio based on simulation results, providing optimal strategies for urban planning and infrastructure management. Additionally, I contributed to the development of a simulation model, ANN-CA (Artificial Neural Network–Cellular Automata) incorporating hydrodynamics, to predict future optimal water-surface ratios by integrating the dynamic evolution of land use patterns.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767711786/water-depth_frz6u0.png", caption: "Water depth simulation results" },
            // { src: "https://example.com/image2.jpg", caption: "Caption 2" }
          ]
        },
        // 其他sections...
      ]
    },
    {
      id: "urban-networks",
      title: "Urban Networks in Metropolitan Regions",
      description:
        "Metropolitan regions function as complex multi-layer networks where cities are interconnected through various economic, social, and infrastructure linkages. Understanding these network structures and their evolution is crucial for regional planning, infrastructure investment, and governance strategies that promote sustainable and balanced metropolitan development.",
      image:
        "https://wallpapercave.com/wp/wp13835447.jpg",
      link: "#",
      gradient: "from-[#E0D6FF] via-[#C1F0DB] to-[#FFD6E0]",
      tags: [
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
        { name: "Urban Systems", color: "#FFE4B5" },
        { name: "Regional Studies", color: "#B0E0FF" },
      ],
      content:"Metropolitan regions are characterized by complex networks of interconnected cities, towns, and communities that form polycentric urban systems. This research project investigates the structure, dynamics, and evolution of urban networks within metropolitan regions, examining how different types of flows, including economic transactions, population mobility, information exchange, and infrastructure connectivity, shape regional development patterns. By applying network science methods, spatial analysis, and multi-layer network modeling, we analyze the hierarchical relationships, functional complementarities, and competitive dynamics among cities within metropolitan areas. The project explores how network centrality, clustering patterns, and accessibility influence regional economic performance, innovation diffusion, and sustainable development. Through comparative studies of major metropolitan regions globally, we investigate strategies for optimizing network configurations to enhance regional competitiveness, promote balanced development, and improve resilience to economic shocks and environmental challenges. This research contributes to understanding polycentric metropolitan governance, infrastructure planning, and policies that foster collaborative rather than purely competitive relationships among cities, ultimately supporting more integrated, efficient, and equitable regional development.",
      sections: [
        {
          type: "text-gallery",
          title: "Unravel the Driving Factor of Competition-cooperation within Metropolitan Urban Network based on Graphic Causal Inference",
          text: "This research applied social network theory and graph representation learning to characterize the status of Shanghai New Town within the metropolitan context from multiple dimensions, including mobility, logistics, and knowledge flow. The study quantified the network externalities and the interrelated drivers shaping the city’s node status, and assessed the intensity of competition and cooperation between the New Town and surrounding cities using ecological niche overlap theory. In addition, a multi-layer heterogeneous GNN model was developed to represent urban network nodes at different spatial scales and to uncover the interrelationships of network nodes across levels using graphical causal models.",
          images: [
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767781043/IMG_9026_ovd5qp.jpg", caption: "Multi-layer Urban Network" },
            { src: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767781042/IMG_9027_klh0fh.jpg", caption: "Network Externalities" }
          ]
        },
        {
          type: "ongoing-paper",
          title: "Rethink on the Transportation Development of the Guangzhou-Foshan Metropolitan Area from the Perspective of the Guangdong-Hong Kong-Macao Greater Bay Area",
          authors: "Zhuang Y., Wang C., Gu J., Huang Y. et al.",
          venue: "South Architecture, 2019",
          year: "2019",
          image: "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767781327/IMG_9028_nkz9ng.jpg",
          description: "This paper examines the transportation development strategies for the Guangzhou-Foshan metropolitan area within the broader context of the Guangdong-Hong Kong-Macao Greater Bay Area, utilizing GIS and big data analysis to understand regional connectivity and mobility patterns.",
          link: "https://kns.cnki.net/kcms2/article/abstract?v=MmR6bzzH81EVBuiydU7B0y9s_VMejCqLYRJLvJ-G4eiMyjwNc3EYwmUMpAh8Tb5mh50_NRyTY0moOloukG0PqTXGGXTT4TcYwzIthP1RP1_OyqKBhMVNVp-tYFkVrsUIa_K3IDjL2pjDc7OHaZ8EsbJ8X4sc850ufsVz7hDeCVCoQoEIkiIFbw&uniplatform=NZKPT&language=CHS"
        },
        // 其他sections...
      ]
    },
    {
      id: "net-zero-building",
      title: "LONG-PLAN: A Net-Zero Energy-Efficient Building",
      description:
        "LONG-PLAN is a net-zero energy-efficient building prototype that reinterprets traditional strip house typology for high-density urban contexts, integrating architectural design and technological innovation to achieve sustainability, practicality, and thermal comfort through modular construction and ecological strategies.",
      image:
        "https://res.cloudinary.com/dkjpqq37r/image/upload/v1767617876/%E6%88%AA%E5%B1%8F2026-01-05_%E4%B8%8B%E5%8D%888.56.55_wvdq5w.png",
      link: "http://cognimatescopilot.com/",
      gradient: "from-[#E0D6FF] via-[#C1F0DB] to-[#FFD6E0]",
      tags: [
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
        { name: "Urban Systems", color: "#FFE4B5" },
        { name: "Resilient Infrastructure", color: "#E0D6FF" },
      ],
      content: "This work won the champion of Solar Decathlon Competition 2018. The SCUT–POLITO team seeks to reintroduce architectural values back into the city by confronting both its opportunities and challenges. Under the context of China’s rapid urbanization, the concept of a single energy-zero house can no longer effectively respond to the pressing conflicts among land scarcity, resource constraints, and population density. Therefore, the integration of architectural design and technological innovation becomes a critical starting point for reconciling the tension between high-quality urban living and limited resources. LONG PLAN is inspired by the traditional strip house typology, fully incorporating its proven living patterns and climate-adaptive strategies. By reinterpreting this vernacular model in a contemporary urban context, the project explores a residential solution that is comfortable, economical, ecological, and efficient, particularly suited to high-density cities. Rather than pursuing excessive technological performance or the mere stacking of advanced systems, the engineering design of LONG PLAN emphasizes sustainability and practicality. From the earliest design stage, architecture and engineering were closely integrated to develop a housing prototype adaptable to narrow urban plots. Through modular construction strategies and a strong focus on thermal comfort and spatial quality, LONG PLAN aims to achieve an ecological regression while embracing an intelligent and sustainable urban future.",
    },
  ],
  talks: [
    {
      title: "My Talk",
      venue: "Conference",
      year: "2024",
      description:
        "A talk about my research and work in artificial intelligence.",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&h=338",
      link: "#",
    },
  ],
  publications: [
    {
      title: "Rethink on the Transportation Development of the Guangzhou-Foshan Metropolitan Area from the Perspective of the Guangdong-Hong Kong-Macao Greater Bay Area – Based on GIS & Big Data Analysis.",
      venue: "Journal: South Architecture",
      year: "2019",
      authors: "Zhuang Y., Wang C., Gu J., Huang Y.et al.",
      tags: [
        { name: "Transporation and Mobility", color: "#E0D6FF" },
        { name: "Regional Studies", color: "#FFD6E0" },
        { name: "Urban Networks", color: "#C1F0DB" },
      ],
      abstractLink: "https://kns.cnki.net/kcms2/article/abstract?v=MmR6bzzH81EVBuiydU7B0y9s_VMejCqLYRJLvJ-G4eiMyjwNc3EYwmUMpAh8Tb5mh50_NRyTY0moOloukG0PqTXGGXTT4TcYwzIthP1RP1_OyqKBhMVNVp-tYFkVrsUIa_K3IDjL2pjDc7OHaZ8EsbJ8X4sc850ufsVz7hDeCVCoQoEIkiIFbw&uniplatform=NZKPT&language=CHS&captchaId=3fb5337b-693a-46bb-b700-c3b6872517a6",
      pdfLink: "#",
    },
    {
      title: "Practical Application of Urban Planning Professional Courses Incorporating Big Data.",
      venue: "Conference: National Academic Seminar on Architecture Digital Technology Teaching and Research",
      year: "2019",
      authors: "Zhuang Y., Lin Z., Gu J., Wang C. ",
      tags: [
        { name: "Urban Data Science", color: "#FFE0B0" },
        { name: "Urban Systems", color: "#B0E0FF" },
        { name: "Transporation and Mobility", color: "#E0D6FF" },
        // { name: "Urban Networks", color: "#FFE0B0" },
      ],
      abstractLink: "https://kns.cnki.net/kcms2/article/abstract?v=MmR6bzzH81GrbSxv8xjjMBv-Bsy0LYtfPk-qtvFaijsigtbomdSNs1EYx9qN4rlEkA_Lqv7aYoN7X-d4lpddogk7ACkHiluPVZ8mbA9aEUV9a7iswgCmvWgR1Z44vMoljLS6OwQ_WstOiqwYn2nn_HKJASstCA8ke36qNpR7u8RGWSSOFBGHBkC7fybrEwYL&uniplatform=NZKPT&language=CHS",
      pdfLink: "#",
    },
    {
      title: "GeoMarX: Empowering Geospatial Marking and Annotation for Complex Targets in Urban Environments.",
      venue: "Computer Software Copyright Certificate",
      year: "2024",
      authors: "Cao R., Pan J., Liao C., Zhang W., Zhuang Y.",
      tags: [
        { name: "Urban Data Science", color: "#FFE0B0" },
        // { name: "Urban Systems", color: "#B0E0FF" },
        // { name: "Transporation and Mobility", color: "#E0D6FF" },
        { name: "Urban Environment", color: "#C1F0DB" },
      ],
      abstractLink: "https://www.youtube.com/watch?v=LipSBH0jFGw",
      pdfLink: "#",
    },
    {
      title: "Software and Storage Systems Designed for Handling Massive Volumes of Sequent Point Data of Mobility Trajectory.",
      venue: "Invention Patent",
      year: "2019",
      authors: "Ye Z., Lin Z., Wang C., Zhuang Y., et al.",
      tags: [
        { name: "Urban Data Science", color: "#FFE0B0" },
        // { name: "Urban Systems", color: "#B0E0FF" },
        { name: "Transporation and Mobility", color: "#E0D6FF" },
        // { name: "Urban Environment", color: "#C1F0DB" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
    {
      title: "Method for Measuring the Strength of Economic Interactions in Urban Networks.",
      venue: "Invention Patent",
      year: "2019",
      authors: "Ye Z., Lin Z., Wang C., Zhuang Y., et al.",
      tags: [
        // { name: "Urban Data Science", color: "#FFE0B0" },
        { name: "Urban Systems", color: "#B0E0FF" },
        // { name: "Transporation and Mobility", color: "#E0D6FF" },
        { name: "Complex Networks", color: "#FFD6E0" },
        { name: "Urban Networks", color: "#C1F0DB" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
    {
      title: "A Model Framework for Discovering and Optimizing the Urban Water Sensitive Areas under Flood Risk.",
      venue: "Undergraduate Thesis",
      year: "2020",
      authors: "Zhuang Y.",
      tags: [
        // { name: "Urban Data Science", color: "#FFE0B0" },
        { name: "Urban Systems", color: "#B0E0FF" },
        // { name: "Transporation and Mobility", color: "#FFE4B5"},
        { name: "Urban Environment", color: "#C1F0DB" },
        { name: "Resilient Infrastructure", color: "#DDA0DD" },
        { name: "SDGs (Sustainable Development Goals)", color: "#D2E2FEFF" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
    {
      title: "Measure the Node Status of Shanghai New Town in Multi-layer Network of Yangtze River Delta.",
      venue: "Master Thesis",
      year: "2021-2023",
      authors: "Zhuang Y.",
      tags: [
        { name: "Regional Studies", color: "#FFD6E0" },
        { name: "Urban Systems", color: "#B0E0FF" },
        { name: "Complex Networks", color: "#FFD6E0" },
        { name: "Urban Networks", color: "#C1F0DB" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
    {
      title: "Adaptive Navigation for Cycling Route Recommendation: Integrating Detour Behavior and Environmental Dynamics.",
      venue: "Master Thesis",
      year: "2023-2024",
      authors: "Zhuang Y.",
      tags: [
        { name: "Transporation and Mobility", color: "#E0D6FF" },
        { name: "Urban Environment", color: "#C1F0DB" },
        { name: "Urban Data Science", color: "#FFE0B0" },
      ],
      abstractLink: "#",
      pdfLink: "#",
    },
  ],
};
