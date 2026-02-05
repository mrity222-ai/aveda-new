'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { portfolioProjects, services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const industries = [...new Set(portfolioProjects.map(p => p.industry))];
const categories = [...new Set(portfolioProjects.map(p => p.category))];

export default function PortfolioGallery() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter(project => {
      const industryMatch = activeIndustry === 'All' || project.industry === activeIndustry;
      const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
      return industryMatch && categoryMatch;
    });
  }, [activeIndustry, activeCategory]);

  return (
    <div className="mt-16">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm mr-2">Industry:</span>
            <Button variant={activeIndustry === 'All' ? 'default' : 'outline'} size="sm" onClick={() => setActiveIndustry('All')}>All</Button>
            {industries.map(industry => (
                <Button key={industry} variant={activeIndustry === industry ? 'default' : 'outline'} size="sm" onClick={() => setActiveIndustry(industry)}>{industry}</Button>
            ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-sm mr-2">Service:</span>
            <Button variant={activeCategory === 'All' ? 'default' : 'outline'} size="sm" onClick={() => setActiveCategory('All')}>All</Button>
            {categories.map(category => (
                <Button key={category} variant={activeCategory === category ? 'default' : 'outline'} size="sm" onClick={() => setActiveCategory(category)}>{category}</Button>
            ))}
        </div>
      </div>
      
      <div className="grid gap-8 md:grid-cols-1">
        {filteredProjects.map((project, index) => (
          <Card key={project.slug} id={project.slug} className="overflow-hidden">
            <div className={`grid md:grid-cols-2 items-center gap-8 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`relative h-80 w-full ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={project.image.imageHint}
                />
              </div>
              <div className="p-8">
                <Badge variant="secondary">{project.category}</Badge>
                <h3 className="font-headline text-3xl font-bold mt-4">{project.title}</h3>
                <div className="mt-4 space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground">Client Goal</h4>
                    <p>{project.clientGoal}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                   <div>
                    <h4 className="font-semibold text-foreground">Results</h4>
                    <p>{project.results}</p>
                  </div>
                </div>
                <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
       {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p>No projects match the selected filters.</p>
          </div>
        )}
    </div>
  );
}
