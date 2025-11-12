import React, { useState } from 'react'
import ProductOverview from './ProductOverview'
import FeatureIcon from './FeatureIcon'
import FeatureCard from './FeatureCard'
import ProgressBar from '../shared/ProgressBar'
import payrollIcon from '../../assets/Payroll.png'
import complianceIcon from '../../assets/Compliance.png'
import hrisIcon from '../../assets/HRIS.png'
import equipmentIcon from '../../assets/Equipment.png'
import benefitsIcon from '../../assets/Benefits.png'

const features = [
  {
    id: 'payroll',
    name: 'Payroll',
    icon: payrollIcon,
    description: 'Fully owned infrastructure in 150+ countries',
    valueProp: '✓ Faster payments\n✓ Local compliance built-in',
    differentiator: 'Only platform with native payroll infrastructure',
    aiTip: 'AI automates tax calculations across 150+ jurisdictions'
  },
  {
    id: 'compliance',
    name: 'Compliance',
    icon: complianceIcon,
    description: 'Automated legal compliance and risk management',
    valueProp: '✓ Real-time compliance monitoring\n✓ Automatic policy updates',
    differentiator: 'AI-powered compliance engine',
    aiTip: 'Here\'s how AI automates compliance in 150+ countries'
  },
  {
    id: 'hris',
    name: 'HRIS',
    icon: hrisIcon,
    description: 'Complete employee lifecycle management',
    valueProp: '✓ Centralized employee data\n✓ Streamlined HR workflows',
    differentiator: 'Integrated with payroll and compliance',
    aiTip: 'Smart employee insights and predictive analytics'
  },
  {
    id: 'equipment',
    name: 'Equipment',
    icon: equipmentIcon,
    description: 'Global hardware and software provisioning',
    valueProp: '✓ Quick employee setup\n✓ Global shipping network',
    differentiator: 'Same-day shipping in 50+ countries',
    aiTip: 'AI recommends optimal equipment based on role'
  },
  {
    id: 'benefits',
    name: 'Benefits',
    icon: benefitsIcon,
    description: 'Competitive benefits packages worldwide',
    valueProp: '✓ Local benefits expertise\n✓ Global coverage options',
    differentiator: 'Native benefits in 100+ countries',
    aiTip: 'Smart benefits recommendations by location'
  }
]

function Scene2({ onSceneComplete }) {
  const [exploredFeatures, setExploredFeatures] = useState([])
  const [selectedFeature, setSelectedFeature] = useState(null)

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature)
    
    if (!exploredFeatures.includes(feature.id)) {
      setExploredFeatures([...exploredFeatures, feature.id])
    }
  }

  const handleCardClose = () => {
    setSelectedFeature(null)
  }

  const allFeaturesExplored = exploredFeatures.length === 5

  return (
    <div className="scene2">
      <ProductOverview>
        <div className="features-grid">
          {features.map(feature => (
            <FeatureIcon
              key={feature.id}
              feature={feature}
              isExplored={exploredFeatures.includes(feature.id)}
              onClick={handleFeatureClick}
            />
          ))}
        </div>
        
        <ProgressBar progress={exploredFeatures.length} total={5} />
        
        {allFeaturesExplored && (
          <button onClick={onSceneComplete} className="cta-button">
            Next: Try It Out
          </button>
        )}
      </ProductOverview>

      {selectedFeature && (
        <FeatureCard 
          feature={selectedFeature} 
          onClose={handleCardClose} 
        />
      )}
    </div>
  )
}

export default Scene2