import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from 'src/teams/team.entity';
import { MatchController } from './match.controller';
import { Match } from './match.entity';
import { MatchService } from './match.service';

@Module({
  imports: [TypeOrmModule.forFeature([Match, Team])],
  controllers: [MatchController],
  providers: [MatchService]
})
export class MatchModule {}
